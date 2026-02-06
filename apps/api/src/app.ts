import Fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import swagger from "@fastify/swagger"
import swaggerUi from "@fastify/swagger-ui"
import { PrismaClient } from "@prisma/client"

import { authRoutes } from "./modules/auth/routes"
import { tenantRoutes } from "./modules/tenants/routes"
import { menuRoutes } from "./modules/menu/routes"
import { orderRoutes } from "./modules/orders/routes"
import { paymentRoutes } from "./modules/payments/routes"

const prisma = new PrismaClient()

async function buildServer() {
  const app = Fastify({
    logger: true,
  })

  // CORS
  await app.register(cors, {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })

  // JWT
  await app.register(jwt, {
    secret: process.env.JWT_SECRET || "super-secret-change-in-production",
    cookie: {
      cookieName: "token",
      signed: false,
    },
  })

  // Swagger Documentation
  await app.register(swagger, {
    openapi: {
      info: {
        title: "FineDine API",
        description: "Restaurant SaaS Platform API",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:4000",
        },
      ],
    },
  })

  await app.register(swaggerUi, {
    routePrefix: "/documentation",
  })

  // Health check
  app.get("/health", async () => {
    return { status: "ok", timestamp: new Date().toISOString() }
  })

  // Register routes
  await app.register(authRoutes, { prefix: "/api/v1/auth" })
  await app.register(tenantRoutes, { prefix: "/api/v1/tenants" })
  await app.register(menuRoutes, { prefix: "/api/v1/menus" })
  await app.register(orderRoutes, { prefix: "/api/v1/orders" })
  await app.register(paymentRoutes, { prefix: "/api/v1/payments" })

  // Decorate with prisma for access in routes
  app.decorate("prisma", prisma)

  return app
}

async function start() {
  try {
    const app = await buildServer()
    await app.listen({ port: 4000, host: "0.0.0.0" })
    console.log("🚀 Server running on http://localhost:4000")
    console.log("📚 API Docs on http://localhost:4000/documentation")
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
