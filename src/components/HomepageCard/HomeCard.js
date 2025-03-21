import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

const HomeCard = ({ query = "javascript" }) => {
  const cardGroupRef = useRef(null);
  const [books, setBooks] = useState([]);
  const maxResults = 10;

  // Fetch books using API URL from environment variables
  const fetchBooks = useCallback(async () => {
    const apiUrl = `${process.env.REACT_APP_BOOKS_API_URL}?q=${query}&maxResults=${maxResults}`;

    if (!process.env.REACT_APP_BOOKS_API_URL) {
      console.error("API URL is not set in environment variables.");
      return;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("API response:", data);

      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    }
  }, [query]);

  // Fetch books when the query changes
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div
      className="homecardContainer mx-auto my-5"
      ref={cardGroupRef}
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      {books.length > 0 ? (
        books.map((book, index) => {
          const bookInfo = book.volumeInfo || {};
          const bookId = book.id || index;

          return (
            <Link to={`/homeCard/book/${bookId}`} key={bookId} className="card-link">
              <div
                className="card card-slider"
                style={{ display: "inline-block", marginRight: "20px" }}
              >
                <img
                  src={bookInfo.imageLinks?.thumbnail || "/placeholder.jpg"}
                  className="card-img-top"
                  alt={bookInfo.title || "No Title"}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="title">{bookInfo.title || "Untitled"}</h5>
                  <p className="card-text">
                    {bookInfo.description
                      ? bookInfo.description.substring(0, 100) + "..."
                      : "No description available"}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {book.saleInfo?.listPrice
                        ? `$${book.saleInfo.listPrice.amount}`
                        : "Price not available"}
                    </small>
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p className="text-center">No books available</p>
      )}
    </div>
  );
};

export default HomeCard;
