const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); //
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/protected", protectedRoutes);
app.use("/api/user", userRoutes);
app.use("/api/books", bookRoutes);

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
