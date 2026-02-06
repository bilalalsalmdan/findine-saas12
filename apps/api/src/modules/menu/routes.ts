import { FastifyInstance, FastifyPluginAsync } from "fastify"

export const menuRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  // GET /api/v1/menus
  app.get("/", async (request, reply) => {
    return { message: "Menu routes - TODO: Implement" }
  })

  // GET /api/v1/menus/:id
  app.get("/:id", async (request, reply) => {
    return { message: "Get menu by ID - TODO: Implement" }
  })

  // POST /api/v1/menus
  app.post("/", async (request, reply) => {
    return { message: "Create menu - TODO: Implement" }
  })
}
