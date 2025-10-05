import { FastifyInstance, FastifyPluginOptions } from "fastify"

async function routes (fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (req, res) => {
        return {msg: "what is up!"}
    })
}

export default routes