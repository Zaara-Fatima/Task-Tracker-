import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.cookies?.accessToken; // 👈 read cookie
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = decoded; // or fetch user from DB
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
