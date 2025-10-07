// Packages
import Fastify from 'fastify';
import cors from "@fastify/cors";

//? Must change library to @fastify..? DONE
import rateLimit from '@fastify/rate-limit';
import {env} from "./env.js";

// Routes
import HelloWorldRoute from "./modules/routes/helloworldroute.js";
import HealthRoute from "./modules/health/route.js";

const fastify = Fastify({
  logger: true
});

fastify.register(cors, {origin: true});
fastify.register(rateLimit, {max: 500, timeWindow: "1 minute"});
fastify.register(HelloWorldRoute);
fastify.register(HealthRoute);

fastify.listen({ port: env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
});  

