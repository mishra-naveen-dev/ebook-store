const express = require("express");
const { fetchBooksFromAPI } = require("../controllers/bookController");

const router = express.Router();
router.get("/fetch-books", fetchBooksFromAPI);

module.exports = router;
