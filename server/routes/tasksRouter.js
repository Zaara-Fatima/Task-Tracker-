import express from "express";
import {
  createTasks,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasksController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createTasks);
router.get("/", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;
