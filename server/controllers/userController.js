const promisePool = require("../config/db"); // ✅ Ensure this is imported

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from token

    // Fetch user details
    const [user] = await promisePool.query(
      "SELECT name, email, phone, address FROM users WHERE id = ?",
      [userId]
    );

    // Fetch total orders placed by the user
    const [orderCount] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM orders WHERE user_id = ?",
      [userId]
    );

    if (!user.length) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user: user[0], orderCount: orderCount[0].count });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getUserProfile };
