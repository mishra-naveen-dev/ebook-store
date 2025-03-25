const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded; // `user_id` will now be available
    console.log("Decoded Token:", decoded); // Debugging log
    next();
  } catch (error) {
    console.error("Token verification error:", error); // Debugging log
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = { authMiddleware };
