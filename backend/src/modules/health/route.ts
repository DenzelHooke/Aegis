import { FastifyInstance, FastifyPluginOptions } from "fastify"

async function route(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/health", async (req, res) => {
        return {health: "100%"}
    })
}

export default route