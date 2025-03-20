import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import "./BookDetails.css";

import { FaStore, FaDollarSign, FaTags } from "react-icons/fa";
import { MdPublishedWithChanges, MdReviews } from "react-icons/md";

const Book = () => {
  const { bookId } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchBookDetails = async () => {
      const url = `${process.env.REACT_APP_BOOKS_API_URL}/${bookId}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBook(data);
        setMainImage(data.volumeInfo?.imageLinks?.thumbnail);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  if (!book) {
    return <div>No book details available</div>;
  }

  return (
    <div className="book-details-container">
      <div className="productdashboardBoxWrapper mx-auto">
        <div className="card container productDetailsSection">
          <div className="row">
            {/* Left Side - Book Image */}
            <div className="col-md-5">
              <Slider>
                <div>
                  <img
                    src={mainImage}
                    alt="Book Cover"
                    className="main-image w-100"
                  />
                </div>
              </Slider>
            </div>

            {/* Right Side - Book Details */}
            <div className="col-md-7">
              <h4>{book.volumeInfo?.title}</h4>

              <div className="productInfo">
                <div className="row">
                  <div className="col-sm-3">
                    <FaStore /> Publisher
                  </div>
                  <div className="col-sm-9">: {book.volumeInfo?.publisher}</div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <MdPublishedWithChanges /> Published
                  </div>
                  <div className="col-sm-9">
                    : {book.volumeInfo?.publishedDate}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <FaTags /> Categories
                  </div>
                  <div className="col-sm-9">
                    : {book.volumeInfo?.categories?.join(", ")}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <MdReviews /> Rating
                  </div>
                  <div className="col-sm-9">
                    :{" "}
                    <Rating
                      value={book.volumeInfo?.averageRating || 0}
                      readOnly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <FaDollarSign /> Price
                  </div>
                  <div className="col-sm-9">
                    :{" "}
                    {book.saleInfo?.listPrice
                      ? `$${book.saleInfo.listPrice.amount}`
                      : "Not available"}
                  </div>
                </div>
              </div>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Book Description */}
          <div className="p-4">
            <h5>Book Description</h5>
            <p>{book.volumeInfo?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
