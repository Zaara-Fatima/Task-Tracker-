import express from "express"
import cors from "cors"
import tasksRouter from "./routes/tasksRouter.js"
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/db.js"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"
import {  errorHandler } from "./middleware/errorMiddleware.js"



const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173","https://task-tracker-zc7a-git-main-zaara-fatimas-projects.vercel.app"],
    credentials: true
}
))
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRoutes);
app.use(errorHandler);


connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server running on port ${PORT}`)
})