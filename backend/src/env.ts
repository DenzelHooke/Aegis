import dotenv from "dotenv"
dotenv.config({path: "./src/.env", debug:true})

export const env = {
    NODE_ENV: process.env.NODE_ENV ?? "dev",
    PORT: Number(process.env.PORT),
    // ADD OTHER .env params later
}
