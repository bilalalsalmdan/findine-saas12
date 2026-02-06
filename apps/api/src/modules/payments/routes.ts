import { FastifyInstance, FastifyPluginAsync } from "fastify"

export const paymentRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  // GET /api/v1/payments
  app.get("/", async (request, reply) => {
    return { message: "Payment routes - TODO: Implement" }
  })

  // POST /api/v1/payments
  app.post("/", async (request, reply) => {
    return { message: "Process payment - TODO: Implement" }
  })
}
