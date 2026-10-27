import express from "express";
import {
  createTasks,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasksController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multerCloudinary.js";

const router = express.Router();

router.post("/", protect, upload.single("image"),
(req, res, next) => {
    console.log("After Multer:", req.file);
    next();
  }, createTasks);
router.get("/", protect, getTasks);
router.put("/:id", protect, upload.single("image"), updateTask);

router.delete("/:id", protect, deleteTask);

export default router;
