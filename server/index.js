import  express  from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from 'cors'
import {authRoutes} from './routes/authRoutes.js'

import cookieParser from "cookie-parser"
dotenv.config()

const app=express()

app.use(express.json())
app.use(cors({
    origin :["https://mern-sand-rho.vercel.app"],
    credentials: true
}
))
app.use(cookieParser())
app.use('/api/auth' , authRoutes)
app.get("/", (req, res) => res.send("Connected to Backend"));

 mongoose.connect(process.env.MONGODB_URI).then(()=>{

//mongoose.connect("mongodb://127.0.0.1:27017/authentication").then(()=>{
 const PORT = process.env.PORT || 3000
    app.listen(process.env.PORT , ()=>{
        console.log("server is running");
})
}).catch((err)=>{console.log(err)});

//mongodb://127.0.0.1:27017/authentication
