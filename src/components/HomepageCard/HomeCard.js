import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

const HomeCard = () => {
  const cardGroupRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("javascript"); // Initial query
  const maxResults = 10; // Example max results, you can change this dynamically

  const fetchBooks = async () => {
    const url = `${process.env.REACT_APP_BOOKS_API_URL}?q=${query}&maxResults=${maxResults}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("API response:", data); // Debugging log

      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]); // Set an empty array if no items are returned
      }
    } catch (error) {
      console.error("Error fetching books from URL:", url, error);
      setBooks([]); // Set an empty array in case of error
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [query, maxResults]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardGroupRef.current) {
        cardGroupRef.current.scrollBy({
          top: 0,
          left: 200, // Adjust the value as needed
          behavior: "smooth",
        });
      }
    }, 8000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  // Function to change the query dynamically
  const changeQuery = () => {
    const queries = ["javascript", "react", "nodejs", "css", "html", "romance"];
    const randomQuery = queries[Math.floor(Math.random() * queries.length)];
    setQuery(randomQuery);
  };

  useEffect(() => {
    const interval = setInterval(changeQuery, 5000); // Change query every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="homecardContainer mx-auto my-5"
        ref={cardGroupRef}
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <Link
              to={{
                pathname: "/book",
                state: { book: book },
              }}
              key={book.id || index}
              className="card-link"
            >
              <div
                className="card card-slider"
                style={{ display: "inline-block", marginRight: "20px" }} // Add margin to create space between cards
              >
                <img
                  src={book.volumeInfo?.imageLinks?.thumbnail || book.cover_i}
                  className="card-img-top"
                  alt={book.volumeInfo?.title || book.title}
                />
                <div className="card-body">
                  <h5 className="title">
                    {book.volumeInfo?.title || book.title}
                  </h5>
                  <p className="card-text">
                    {book.volumeInfo?.description || book.first_sentence}
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
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
