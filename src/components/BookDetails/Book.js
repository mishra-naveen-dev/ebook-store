import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import "./BookDetails.css";
import {
  FaStore,
  FaIndianRupeeSign,
  FaTags,
  FaReply,
  FaReplyAll,
} from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import {
  MdOutlinePhotoSizeSelectLarge,
  MdStorage,
  MdReviews,
  MdPublishedWithChanges,
} from "react-icons/md";

const Book = () => {
  const location = useLocation();
  const { book } = location.state || {};

  const [mainImage, setMainImage] = useState(
    book?.volumeInfo?.imageLinks?.thumbnail
  );

  if (!book) {
    return <div>No book details available</div>;
  }

  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const productSliderSmalOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="book-details-container">
      <div className="productdashboardBoxWrapper product-right-content mx-auto">
        <div className="card container productDetailsSection">
          <div className="row">
            {/* left side */}
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h5 className="mb-4 bold">Book Gallery</h5>
                <Slider {...productSliderOptions} className="slider-big mb-3">
                  <div className="item">
                    <img src={mainImage} alt="" className="main-image w-100" />
                  </div>
                </Slider>
                <Slider {...productSliderSmalOptions} className="slider-small">
                  {book.volumeInfo.imageLinks?.thumbnail && (
                    <div className="item">
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt=""
                        className="slider-image w-100"
                        onMouseEnter={() =>
                          setMainImage(book.volumeInfo.imageLinks.thumbnail)
                        }
                      />
                    </div>
                  )}
                </Slider>
              </div>
            </div>

            {/* right side */}
            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h5 className="mb-4 bold">Book Details</h5>
                <h4>{book.volumeInfo.title}</h4>

                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaStore />
                      </span>
                      <span className="name">Publisher</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>{book.volumeInfo.publisher}</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdPublishedWithChanges />
                      </span>
                      <span className="name">Published Date</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>{book.volumeInfo.publishedDate}</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaTags />
                      </span>
                      <span className="name">Categories</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>{book.volumeInfo.categories?.join(", ")}</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdReviews />
                      </span>
                      <span className="name">Rating</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <Rating
                        name="read-only"
                        value={book.volumeInfo.averageRating || 0}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaIndianRupeeSign />
                      </span>
                      <span className="name">Price</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        {book.saleInfo.listPrice
                          ? `$${book.saleInfo.listPrice.amount}`
                          : "Price not available"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* downside */}
          <div className="p-4">
            <h5 className="mt-4 mb-3">Book Description</h5>
            <p>{book.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
