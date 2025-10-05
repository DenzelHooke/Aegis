// Require the framework and instantiate it

// Packages
import Fastify from 'fastify'
import cors from "@fastify/cors"

//? Must change library to @fastify..? DONE
import rateLimit from '@fastify/rate-limit'
import jwt from '@fastify/jwt'

// Routes
import HelloWorldRoute from "./modules/routes/helloworldroute.js"
import HealthRoute from "./modules/health/route.js"

const fastify = Fastify({
  logger: true
})

fastify.register(cors, {origin: true})
fastify.register(rateLimit, {max: 9999999, timeWindow: "1 minute"})
fastify.register(HelloWorldRoute)
fastify.register(HealthRoute)
                
// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})  