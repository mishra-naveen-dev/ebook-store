import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

const HomeCard = ({ books, initialBooks }) => {
  console.log(initialBooks);

  return (
    <div
      className="homecardContainer mx-auto my-5"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      {books.length > 0 ? (
        books.map((book, index) => {
          const bookInfo = book.volumeInfo || {};
          const bookId = book.id || index;

          return (
            <Link
              to={`/homeCard/book/${bookId}`}
              key={bookId}
              className="card-link"
            >
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
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome to Book Store
          </h2>
          <p className="text-gray-600 dark:text-white">
            {initialBooks.map((book, index) => {
              const bookInfo = book.volumeInfo || {};
              const bookId = book.id || index;

              return (
                <Link
                  to={`/homeCard/book/${bookId}`}
                  key={bookId}
                  className="card-link"
                >
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
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
