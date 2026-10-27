import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../db/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "task-tracker",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    public_id: Date.now() + "-" + file.originalname,
  }),
});

export const upload = multer({ storage });