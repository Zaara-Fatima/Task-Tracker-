import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  console.log("Headers:", req.headers.authorization);
  const token = req.cookies?.accessToken; // 👈 read cookie
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // or fetch user from DB
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
