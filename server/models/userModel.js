const db = require("../config/db");
const promisePool = require("../config/db");

// Function to find user by email
const findUserByEmail = async (email) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT user_id, email, password FROM users WHERE email = ?",
      [email]
    );

    console.log("Database Query Result:", rows); // Debugging line

    return rows.length ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// Function to create a new user
const createUser = async (user) => {
  const {
    name,
    email,
    phone,
    country,
    address,
    questionChoice,
    answer,
    password,
  } = user;
  const sql = `INSERT INTO users (name, email, phone, country, address, questionChoice, answer, password) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const [result] = await db.query(sql, [
    name,
    email,
    phone,
    country,
    address,
    questionChoice,
    answer,
    password,
  ]);
  return result.insertId; // Return the new user ID
};

// Update user password
const updateUserPassword = async (userId, newPassword) => {
  try {
    const [results] = await promisePool.query(
      "UPDATE users SET password = ? WHERE user_id = ?",
      [newPassword, userId]
    );
    return results;
  } catch (err) {
    console.error("Error updating password:", err);
    throw err;
  }
};

module.exports = { findUserByEmail, createUser, updateUserPassword };
