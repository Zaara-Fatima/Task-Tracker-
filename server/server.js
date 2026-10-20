import express from "express"
import cors from "cors"
import tasksRouter from "./routes/tasksRouter.js"
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/db.js"
import dotenv from "dotenv"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173","https://task-tracker-zc7a-git-main-zaara-fatimas-projects.vercel.app/"],
    credentials: true
}
))
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", tasksRouter);
app.use("/api/auth", authRoutes);
app.use(notFound);
app.use(errorHandler);


connectDB()
app.listen(3000,()=>{
    console.log(`🚀 Server running  on port 3000`
)
})