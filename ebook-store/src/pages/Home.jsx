import React, { useState, useEffect } from "react";
import axios from "axios";
import B1Child from "../assets/image/B1Child.jpeg";
import AuthorImage from "../assets/image/author1.jpeg";
import Spinner from "./Spinner";
import SearchBar from "../components/SearchBar";
import HomeCard from "../components/HomepageCard/HomeCard";
import Categories from "../components/BookCategories/Categories";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [result, setResult] = useState([]);
  const [initialBooks, setInitialBooks] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    // Fetch books
    const fetchInitialBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BOOKS_API_URL}?q=subject:fiction&maxResults=10`
        );
        setInitialBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching initial books:", error);
      }
    };

    fetchInitialBooks();

    // Simulate loading process
    setTimeout(() => {
      setData({
        featuredAuthor: {
          name: "John Doe",
          bio: "John Doe is a bestselling author known for his thrilling novels and captivating storytelling.",
          image: AuthorImage,
        },
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-[rgb(51,51,51)] min-h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {/* Header Section */}
          <header className="bg-white shadow dark:bg-inherit">
            <div className="container mx-auto p-6">
              <img
                src={B1Child}
                alt="Book Store"
                className="w-full max-h-[720px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </header>

          {/* Book Store Section */}
          <section className="mx-auto my-5">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
              Book Store
            </h2>
            <SearchBar setResult={setResult} />
            <HomeCard books={result} initialBooks={initialBooks} />
            <Categories
              title="Book Categories"
              description="Explore books from various categories."
            />
          </section>

          {/* New Arrivals Section */}
          <section className="bg-gray-200 py-8 dark:bg-[rgb(40,40,40)]">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                New Arrivals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-lg shadow-lg p-6 dark:bg-[rgb(30,30,30)]"
                  >
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 dark:text-white">
                      {book.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top Trending Books Section */}
          <section className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Top Trending Books
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-lg shadow-lg p-6 dark:bg-[rgb(30,30,30)]"
                >
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    {book.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Views: {book.viewCount}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Author Section */}
          <section className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Featured Author
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center dark:bg-[rgb(30,30,30)]">
              {/* ✅ Optional Chaining to Prevent Errors */}
              <img
                src={data?.featuredAuthor?.image}
                alt={data?.featuredAuthor?.name || "Featured Author"}
                className="w-32 h-32 object-cover rounded-full shadow-lg mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  {data?.featuredAuthor?.name || "Loading..."}
                </h3>
                <p className="text-gray-600 dark:text-white">
                  {data?.featuredAuthor?.bio || "Fetching author details..."}
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
