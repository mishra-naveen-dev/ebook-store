const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const pool = require("./config/db"); // Database connection
const authRoutes = require("./routes/authRoutes");
// const protectedRoutes = require("./routes/protectedRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/protected", protectedRoutes);

// Check Database Connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database!");
    connection.release();
  }
});

// Start Server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
