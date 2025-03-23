import React, { useState } from "react";
import Modal from "./Modal";
import "./Styles/style.css"
const Card = ({ book }) => {
    const [show, setShow] = useState(false);

    // Ensure volumeInfo and imageLinks exist before accessing them
    const volumeInfo = book.volumeInfo || {};
    const thumbnail = volumeInfo.imageLinks?.smallThumbnail;
    const amount = book.saleInfo?.listPrice?.amount;

    return (
        <>
            {thumbnail && amount && (
                <div className="card" onClick={() => { setShow(true); }}>
                    <img src={thumbnail} alt="Book cover" />
                    <div className="bottom">
                        <h3 className="title">{volumeInfo.title || "Unknown Title"}</h3>
                        <p className="amount">&#8377;{amount || "N/A"}</p>
                    </div>
                </div>
            )}
            <Modal book={book} show={show} onClose={() => setShow(false)} />
        </>
    );
};

export default Card;