import React, { useState, useEffect } from 'react';
import B1Child from '../assets/image/B1Child.jpeg';
import AuthorImage from '../assets/image/author1.jpeg';
import Spinner from './Spinner';
import SearchBar from '../components/SearchBar';
import Preloader from '../components/Preloader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
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

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement search logic here
  };

  return (
    <>
      <Preloader />
      <div className="bg-gray-100 dark:bg-[rgb(51,51,51)] min-h-screen">
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <SearchBar onSearch={handleSearch} />

            <header className="bg-white shadow dark:bg-inherit">
              <div className="container mx-auto p-6">
                <img
                  src={B1Child}
                  alt="Book Store"
                  className="w-full max-h-[720px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </header>

            <section className="container mx-auto my-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Book Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Book Category Cards */}
                <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-[rgb(30,30,30)]">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Romance</h3>
                  <p className="text-gray-600 dark:text-white">Explore our collection of romantic novels.</p>
                </div>
                {/* Additional cards... */}
              </div>
            </section>

            <section className="bg-gray-200 py-8 dark:bg-[rgb(40,40,40)]">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">New Arrivals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* New Arrival Books */}
                  <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-[rgb(30,30,30)]">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Book Title 1</h3>
                    <p className="text-gray-600 dark:text-white">Coming Soon</p>
                  </div>
                  {/* Additional books... */}
                </div>
              </div>
            </section>

            <section className="container mx-auto my-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Top Trending Books</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Trending Books */}
                <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-[rgb(30,30,30)]">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Trending Book 1</h3>
                  <p className="text-gray-600 dark:text-white">Description of the trending book.</p>
                </div>
                {/* Additional trending books... */}
              </div>
            </section>

            <section className="container mx-auto my-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Featured Author</h2>
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center dark:bg-[rgb(30,30,30)]">
                <img
                  src={data.featuredAuthor.image}
                  alt={data.featuredAuthor.name}
                  className="w-32 h-32 object-cover rounded-full shadow-lg mr-6"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{data.featuredAuthor.name}</h3>
                  <p className="text-gray-600 dark:text-white">{data.featuredAuthor.bio}</p>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
