import { FastifyInstance, FastifyPluginOptions } from "fastify"

async function routes (fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (req, res) => {
        return {msg: "Hello World"}
    })
}

export default routes