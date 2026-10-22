import express from "express"
import { loginController, logoutController, registerController } from "../controllers/authController.js"
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/me", protect, (req, res) => {
  res.json(req.user);
});
router.post('/register',registerController)
router.post('/login',loginController)
router.post('/logout', logoutController)

export default router