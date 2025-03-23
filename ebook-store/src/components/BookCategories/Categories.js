import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Technologies", query: "technology" },
  { name: "Romance", query: "romance" },
  { name: "Mystery", query: "mystery" },
  { name: "Fantasy", query: "fantasy" },
  { name: "Science", query: "science" },
  { name: "Horror", query: "horror" },
];

const Categories = ({ title, description }) => {
  return (
    <div className="categories-container">
      <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        {title}
      </h3>

      <p className="text-center text-gray-600 dark:text-white mb-6">
        {description}
      </p>
      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            {category.name}
          </h3>
          <CategoryBooks query={category.query} />
        </div>
      ))}
    </div>
  );
};

const CategoryBooks = ({ query }) => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const url = `${process.env.REACT_APP_BOOKS_API_URL}?q=${query}&maxResults=5`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items) {
          setBooks(data.items);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, [query]);

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="books-slider">
      {books.length > 0 ? (
        books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="card-link">
            <div className="cardC">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className="card-img"
              />
              <div className="card-body">
                <h5 className="card-title">{book.volumeInfo.title}</h5>
                <p className="card-text">
                  {truncateText(book.volumeInfo.description || "", 20)}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No books available</p>
      )}
    </Slider>
  );
};

export default Categories;
