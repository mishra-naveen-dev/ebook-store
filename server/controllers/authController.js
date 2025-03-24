const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser,updateUserPassword } = require("../models/userModel");
require("dotenv").config();

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
    const user = await findUserByEmail(email);

    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({
        message: "Login successful",
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
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
  
      // Check if user exists
      const user = await findUserByEmail(email);
      if (!user) return res.status(404).json({ error: "User not found" });
  
      // Check if security question answer matches
      if (user.answer !== answer) {
        return res.status(400).json({ error: "Incorrect security answer" });
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await updateUserPassword(user.id, hashedPassword);
  
      res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      console.error("Forgot Password Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

module.exports = { signup, login,logout,forgotPassword };
