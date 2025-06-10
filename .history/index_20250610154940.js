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

app.get("/gay-shang" , (req , res)=>{
    return res.json({
        msg:"stage3"
    })
})

app.get("/testing" , (req, res) => {
    return res.json({
        msg:"stage5"
    })
})

app.listen(port , () => {
    console.log(`server running on port: `,port)
})