import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import db from "./config/db.js";
import authRoutes from "./routes/auth.route.js";


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:8000"],
    credentials: true,
}));
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT || 8000;

db;

app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

