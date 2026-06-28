import express from "express"
import cors from "cors"
import tasksRouter from "./routes/tasksRouter.js"
import connectDB from "./db/db.js"
import dotenv from "dotenv"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

const app = express()
app.use(express.json())
app.use(cors(
    options=>{
        options.origin="https://task-tracker-kss6.vercel.app/"
    }
))
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", tasksRouter);
app.use(notFound);
app.use(errorHandler);

dotenv.config()
connectDB()
app.listen(3000,()=>{
    console.log(`🚀 Server running  on port 3000`
)
})
