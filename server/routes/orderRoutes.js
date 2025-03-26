const express = require("express");
const { addOrder } = require("../controllers/orderController");

const router = express.Router();

// Route to add a new order
router.post("/orders", addOrder);

module.exports = router;
