import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setResult }) => {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return; // Prevent empty searches

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      setResult(response.data.items || []); // Store fetched book data in state
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  return (
    <div className="search-bar-container text-center my-4">
      <form onSubmit={handleSearch} className="flex justify-center">
        <input
          type="text"
          placeholder="Search for books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-l w-2/3 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
