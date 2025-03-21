import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { FaStore, FaDollarSign, FaTags, FaShoppingCart } from "react-icons/fa";
import { MdPublishedWithChanges, MdReviews } from "react-icons/md";

const MAX_WORDS = 50;

const Book = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [expanded, setExpanded] = useState(false); // Ensure expanded is properly defined

  useEffect(() => {
    const fetchBookDetails = async () => {
      const url = `${process.env.REACT_APP_BOOKS_API_URL}/${bookId}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBook(data);
        setMainImage(
          data.volumeInfo?.imageLinks?.thumbnail || "/placeholder.jpg"
        );
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

  // Extract book description and clean HTML tags
  const description =
    book.volumeInfo?.description || "No description available.";
  const strippedDescription = description.replace(/<\/?[^>]+(>|$)/g, "");
  const words = strippedDescription.split(" ");
  const shortDescription = words.slice(0, MAX_WORDS).join(" ");

  return (
    <div className="book-details-container">
      <div className="productdashboardBoxWrapper mx-auto">
        <div className="card container productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="image-container">
                <img
                  src={mainImage}
                  alt="Book Cover"
                  className="main-image w-100"
                />
              </div>
            </div>

            <div className="col-md-7">
              <h4>{book.volumeInfo?.title}</h4>

              <div className="productInfo">
                <div className="row">
                  <div className="col-sm-3">
                    <FaStore /> Publisher
                  </div>
                  <div className="col-sm-9">
                    : {book.volumeInfo?.publisher || "N/A"}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <MdPublishedWithChanges /> Published
                  </div>
                  <div className="col-sm-9">
                    : {book.volumeInfo?.publishedDate || "N/A"}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <FaTags /> Categories
                  </div>
                  <div className="col-sm-9">
                    : {book.volumeInfo?.categories?.join(", ") || "N/A"}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <MdReviews /> Rating
                  </div>
                  <div className="col-sm-9">
                    : {book.volumeInfo?.averageRating || "N/A"}
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
              <button className="add-to-cart-button">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>

          {/* Book Description with "Read More" button */}
          <div className="p-4">
            <h5>Book Description</h5>
            <p>{expanded ? strippedDescription : `${shortDescription}...`}</p>
            {!expanded && words.length > MAX_WORDS && (
              <button
                className="read-more-button"
                onClick={() => setExpanded(true)}
              >
                Read More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
