import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Components/Cart'; // Import the Card component
import "../Components/Styles/style.css";

const freeBooks = [
    {
        title: "Pride and Prejudice",
        description: "A romantic novel of manners written by Jane Austen.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PrideAndPrejudiceTitlePage.jpg/800px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        title: "Moby Dick",
        description: "A novel by Herman Melville about the voyage of the whaling ship Pequod.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Moby-Dick_FE_title_page.jpg/800px-Moby-Dick_FE_title_page.jpg"
    },
    {
        title: "The Great Gatsby",
        description: "A novel by F. Scott Fitzgerald that explores themes of decadence and excess.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/The_Great_Gatsby_1925_cover.jpg/800px-The_Great_Gatsby_1925_cover.jpg"
    }
];

const BookDetail = ({ bookData }) => {
    const location = useLocation();
    console.log("Location state:", location.state);

    // Combine bookData and freeBooks to render
    const booksToDisplay = bookData.length > 0 ? bookData : freeBooks;

    return (
        <div className="container mx-auto my-5">
            <div className="card-slider">
                {booksToDisplay.map((book, index) => (
                    <div key={index} className="card-container">
                        <Card book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookDetail;