const axios = require("axios");
const { addBook } = require("../models/Book");
const promisePool = require("../config/db");

const fetchBooksFromAPI = async (req, res) => {
    try {
        const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=javascript");
        const books = response.data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.join(", ") || "Unknown",
            publisher: item.volumeInfo.publisher || "Unknown",
            published_date: item.volumeInfo.publishedDate || null,
            description: item.volumeInfo.description || "",
            price: item.saleInfo?.listPrice?.amount || 0,
            image_url: item.volumeInfo.imageLinks?.thumbnail || "",
            category: item.volumeInfo.categories?.[0] || "General",
            rating: item.volumeInfo.averageRating || 0
        }));

        for (const book of books) {
            await addBook(book);
        }

        res.json({ message: "Books stored successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error fetching books from API" });
    }
};



// Function to add a new book
const addNewBook = async (req, res) => {
    try {
        const { book_id, title, author, publisher, published_date, description, price, image_url, category, rating } = req.body;

        const sql = `INSERT INTO books (book_id, title, author, publisher, published_date, description, price, image_url, category, rating) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await promisePool.query(sql, [book_id, title, author, publisher, published_date, description, price, image_url, category, rating]);

        res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = { fetchBooksFromAPI, addNewBook };
