const db = require("../config/db");

// Function to find user by email
const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows.length > 0 ? rows[0] : null;
};

// Function to create a new user
const createUser = async (user) => {
  const { name, email, phone, country, address, questionChoice, answer, password } = user;
  const sql = `INSERT INTO users (name, email, phone, country, address, questionChoice, answer, password) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const [result] = await db.query(sql, [name, email, phone, country, address, questionChoice, answer, password]);
  return result.insertId; // Return the new user ID
};

// Update user password
const updateUserPassword = async (userId, newPassword) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [newPassword, userId],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

module.exports = { findUserByEmail, createUser,updateUserPassword };
