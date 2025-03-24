const pool = require("../config/db");

const addBook = async (book) => {
    const { id, title, author, publisher, published_date, description, price, image_url, category, rating } = book;
    await pool.query(
        `INSERT INTO books (book_id, title, author, publisher, published_date, description, price, image_url, category, rating)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE title=VALUES(title)`,
        [id, title, author, publisher, published_date, description, price, image_url, category, rating]
    );
};

module.exports = { addBook };
