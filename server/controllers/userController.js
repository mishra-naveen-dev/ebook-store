const promisePool = require("../config/db"); // ✅ Ensure this is imported

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.user_id; // Use `user_id` from token
    console.log("User ID from token:", userId); // Debugging log

    // Fetch user details (Change `id` to `user_id`)
    const [user] = await promisePool.query(
      "SELECT name, email, phone, address FROM users WHERE user_id = ?",
      [userId]
    );
    console.log("User Details:", user); // Debugging log

    // Fetch total orders placed by the user
    const [orderCount] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM orders WHERE user_id = ?",
      [userId]
    );
    console.log("Order Count:", orderCount); // Debugging log

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
