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
    origin :["http://localhost:5173"],
    credentials: true
}
))
app.use(cookieParser())
app.use('/api/auth' , authRoutes)
app.get("/", (req, res) => res.send("Connected to Backend"));

mongoose.connect('mongodb+srv://2003010173:gpaxA8zeO4FZwy6q@binary-testing.q9tezyp.mongodb.net/binary-testing?retryWrites=true&w=majority&appName=binary-testing').then(()=>{
//const PORT = process.env.PORT || 3000
    app.listen(process.env.PORT , ()=>{
        console.log("server is running");
})
}).catch((err)=>{console.log(err)});

//mongodb://127.0.0.1:27017/authentication
