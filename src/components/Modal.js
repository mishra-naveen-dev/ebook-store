import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ show, book, onClose }) => {
    if (!show) {
        return null;
    }

    const { volumeInfo } = book;
    const thumbnail = volumeInfo.imageLinks?.smallThumbnail;
    const previewLink = volumeInfo.previewLink; // Get the preview link

    return (
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
                <div className="inner-box">
                    {thumbnail && <img src={thumbnail} alt="" />}
                    <div className="info">
                        <h1>{volumeInfo.title}</h1>
                        <h3>{volumeInfo.authors?.join(", ") || "Unknown Author"}</h3>
                        <h4>{volumeInfo.publisher} <span>{volumeInfo.publishedDate}</span></h4><br />
                        {previewLink ? ( // Only show the button if the preview link exists
                            <Link to={previewLink} >
                                <span onClick={() => console.log(previewLink)}>More</span>
                            </Link>
                        ) : (
                            <p>No preview available</p> // Optional: show a message if no link
                        )}
                    </div>
                </div>
                <h4 className="description">{volumeInfo.description}</h4>
            </div>
        </div>
    );
}

export default Modal;