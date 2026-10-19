import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // ✅ must be boolean
      trim: true,     // optional: removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,   // optional: ensures no duplicate emails
      lowercase: true // optional: normalize email
    },
    passwordHash: {   // ✅ align with your controller
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
