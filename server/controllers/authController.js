const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  findUserByEmail,
  createUser,
  updateUserPassword,
} = require("../models/userModel");
require("dotenv").config();
const promisePool = require("../config/db");
// Signup Function
const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      country,
      address,
      questionChoice,
      answer,
      password,
    } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser({
      name,
      email,
      phone,
      country,
      address,
      questionChoice,
      answer,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: userId, email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "Signup successful", token });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login Function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fetch user from DB
    const [rows] = await promisePool.query(
      "SELECT user_id, name, email, country, address, phone, password FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }


    delete user.password;

    // Generate JWT Token
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// logout function
const logout = async (req, res) => {
  try {
    // Invalidate token by setting an expired cookie (optional)
    res.cookie("token", "", { expires: new Date(0), httpOnly: true });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//   handle forgotpassword function
const forgotPassword = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    // Fetch user data
    const user = await findUserByEmail(email);
    console.log("Retrieved User:", user); // Debugging line

    if (!user) return res.status(404).json({ error: "User not found" });

    // Debugging: Check stored and entered security answer
    console.log("Stored Answer:", user.answer);
    console.log("User Entered Answer:", answer);

    // Verify security answer
    if (user.answer.trim().toLowerCase() !== answer.trim().toLowerCase()) {
      return res.status(400).json({ error: "Incorrect security answer" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await updateUserPassword(user.user_id, hashedPassword);

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signup, login, logout, forgotPassword };
