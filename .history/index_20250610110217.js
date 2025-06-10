import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors({
    origin:"*"
}))

const port = process.env.PORT || 4040

app.get("/",(req , res)=>{
    return res.json({
        msg:"stage2"
    })
})

app.listen(port , () => {
    console.log(`server running on port: `,port)
})