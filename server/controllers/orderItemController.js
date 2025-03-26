const promisePool = require("../config/db");

// Function to add a new order item
const addOrderItem = async (req, res) => {
    try {
        const { order_id, book_id, quantity, price } = req.body;

        const sql = `INSERT INTO order_items (order_id, book_id, quantity, price) 
                 VALUES (?, ?, ?, ?)`;
        await promisePool.query(sql, [order_id, book_id, quantity, price]);

        res.status(201).json({ message: "Order item added successfully" });
    } catch (error) {
        console.error("Error adding order item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Function to get all order items for a specific order
const getOrderItems = async (req, res) => {
    try {
        const { order_id } = req.params;

        const sql = `SELECT * FROM order_items WHERE order_id = ?`;
        const [rows] = await promisePool.query(sql, [order_id]);

        res.status(200).json({ orderItems: rows });
    } catch (error) {
        console.error("Error fetching order items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = { addOrderItem, getOrderItems };
