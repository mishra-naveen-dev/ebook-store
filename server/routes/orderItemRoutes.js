const express = require("express");
const { addOrderItem, getOrderItems } = require("../controllers/orderItemController");

const router = express.Router();

// Route to add a new order item
router.post("/order-items", addOrderItem);

// Route to get all order items for a specific order
router.get("/order-items/:order_id", getOrderItems);

module.exports = router;
