// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from "axios";
import Card from "./Cart";
import "./Styles/style.css"
import BookDetail from '../Pages/BookDetail';

const SearchBar = ({ onSearch, setResult }) => {
  const [query, setQuery] = useState('');
  const [bookData, setBookData] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  const [search, setSearch] = useState("");


  // Function to handle search input and fetch book data
  const searchBook = async (evt) => {
    if (evt.key === "Enter" && search.trim()) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`
        );
        setBookData(response.data.items || []);
        setResult(response.data.items || []);

      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-lg mx-auto my-8">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:text-white search-input"
          type="text"
          placeholder="Search for books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"

        >
          Search
        </button>
      </div>

      {/* <section className="container mx-auto my-8">
        <Card book={bookData} />
      </section> */}
      {/* <BookDetail bookData={bookData} /> */}
    </form>
  );
};

export default SearchBar;
