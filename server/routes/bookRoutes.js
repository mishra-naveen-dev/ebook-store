const express = require("express");
const { fetchBooksFromAPI, addNewBook } = require("../controllers/bookController");


const router = express.Router();

// Route to fetch books from API
router.get("/fetch-books", fetchBooksFromAPI);

// Route to add a new book
router.post("/books", addNewBook);



module.exports = router;
