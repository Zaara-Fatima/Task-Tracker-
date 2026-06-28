import express from "express"
import { createTasks, deleteTask, getTasks, updateTask } from "../controllers/tasksController.js"

const router = express.Router()

router.post("/",createTasks)
router.get("/",getTasks)
router.put("/:id",updateTask)
router.delete("/:id",deleteTask)

export default router