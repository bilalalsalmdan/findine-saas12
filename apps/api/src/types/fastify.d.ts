import { FastifyInstance, FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    prisma: any;
    authenticate: (request: FastifyRequest, reply: any) => Promise<void>;
  }
  
  interface FastifyRequest {
    user: {
      userId: string;
      restaurantId: string;
      role: string;
    };
  }
}

export {};
