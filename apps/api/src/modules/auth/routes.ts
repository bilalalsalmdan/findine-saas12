import { FastifyInstance, FastifyPluginAsync } from "fastify"
import bcrypt from "bcryptjs"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  restaurantName: z.string().min(2),
})

export const authRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  // POST /api/v1/auth/register
  app.post("/register", async (request, reply) => {
    try {
      const data = registerSchema.parse(request.body)
      
      // Check if email exists
      const existingUser = await app.prisma.user.findUnique({
        where: { email: data.email },
      })
      
      if (existingUser) {
        return reply.status(409).send({
          error: "Email already registered",
        })
      }
      
      // Hash password
      const passwordHash = await bcrypt.hash(data.password, 12)
      
      // Create restaurant and user
      const result = await app.prisma.$transaction(async (tx) => {
        // Create restaurant
        const restaurant = await tx.restaurant.create({
          data: {
            name: data.restaurantName,
            slug: data.restaurantName.toLowerCase().replace(/\s+/g, "-"),
            email: data.email,
            subscriptionTier: "free",
            subscriptionStatus: "trial",
          },
        })
        
        // Create owner user
        const user = await tx.user.create({
          data: {
            email: data.email,
            passwordHash,
            firstName: data.firstName,
            lastName: data.lastName,
            role: "owner",
            restaurantId: restaurant.id,
          },
        })
        
        return { restaurant, user }
      })
      
      // Generate JWT
      const token = await app.jwt.sign({
        userId: result.user.id,
        restaurantId: result.restaurant.id,
        role: result.user.role,
      })
      
      return {
        token,
        user: {
          id: result.user.id,
          email: result.user.email,
          firstName: result.user.firstName,
          lastName: result.user.lastName,
          role: result.user.role,
        },
        restaurant: {
          id: result.restaurant.id,
          name: result.restaurant.name,
          slug: result.restaurant.slug,
        },
      }
    } catch (error) {
      app.log.error(error)
      return reply.status(400).send({
        error: "Invalid input data",
      })
    }
  })

  // POST /api/v1/auth/login
  app.post("/login", async (request, reply) => {
    try {
      const data = loginSchema.parse(request.body)
      
      // Find user
      const user = await app.prisma.user.findUnique({
        where: { email: data.email },
        include: { restaurant: true },
      })
      
      if (!user) {
        return reply.status(401).send({
          error: "Invalid credentials",
        })
      }
      
      // Verify password
      const validPassword = await bcrypt.compare(data.password, user.passwordHash)
      
      if (!validPassword) {
        return reply.status(401).send({
          error: "Invalid credentials",
        })
      }
      
      // Update last login
      await app.prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      })
      
      // Generate JWT
      const token = await app.jwt.sign({
        userId: user.id,
        restaurantId: user.restaurantId,
        role: user.role,
      })
      
      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
        restaurant: {
          id: user.restaurant.id,
          name: user.restaurant.name,
          slug: user.restaurant.slug,
        },
      }
    } catch (error) {
      app.log.error(error)
      return reply.status(400).send({
        error: "Invalid input data",
      })
    }
  })

  // GET /api/v1/auth/me
  app.get("/me", { onRequest: [app.authenticate] }, async (request, reply) => {
    const user = await app.prisma.user.findUnique({
      where: { id: request.user.userId },
      include: { restaurant: true },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        restaurant: {
          select: {
            id: true,
            name: true,
            slug: true,
            subscriptionTier: true,
            subscriptionStatus: true,
          },
        },
      },
    })
    
    if (!user) {
      return reply.status(404).send({
        error: "User not found",
      })
    }
    
    return { user }
  })
}
