import dotenv from "dotenv"
import { envHandler } from "./helpers/errorHandlers"
import { resolve } from "path"

// Resolve path to .env file at the project root
const envPath = resolve(process.cwd(), ".env")
console.log(process.cwd())

// Load enviroment variables
dotenv.config({path: envPath, debug:true})


export let env = {      
    NODE_ENV: process.env.NODE_ENV ?? "dev",
    PORT: Number(process.env.PORT ?? 3000)
}

console.log("Loaded .env from: ", envPath)
