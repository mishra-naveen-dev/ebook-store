const promisePool = require("../config/db");

// Function to add a new order
const addOrder = async (req, res) => {
    try {
        const { user_id, total_price, status } = req.body;

        const sql = `INSERT INTO orders (user_id, total_price, status) 
                 VALUES (?, ?, ?)`;
        await promisePool.query(sql, [user_id, total_price, status]);

        res.status(201).json({ message: "Order added successfully" });
    } catch (error) {
        console.error("Error adding order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { addOrder };
