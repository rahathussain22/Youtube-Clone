import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// app.use is used when we use middlewares or configuration settings
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"32kb"}))
app.use(express.urlencoded({extended: true, limit:"32kb"}))
app.use(express.static("Information"))
app.use(cookieParser())


// import routes here
import userRouter from "./routes/user.routes.js"
app.use('/user',userRouter)
export { app }