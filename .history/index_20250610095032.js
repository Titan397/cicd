import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors({
    origin:"*"
}))

const port = process.env.PORT || 4040