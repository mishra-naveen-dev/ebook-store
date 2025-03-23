import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // Ensure cart is loaded from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeCartItem = (pid) => {
    const updatedCart = cart.filter((item) => item._id !== pid);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h1 className="text-center">Your Cart</h1>
      <h4 className="text-center">
        {cart.length ? `You have ${cart.length} item(s)` : "Your Cart is Empty"}
      </h4>

      <div className="cart-items">
        {cart.map((p) => (
          <div className="cart-item" key={p._id}>
            <img src={p.image} alt={p.name} className="cart-img" />
            <div className="cart-details">
              <p>{p.name}</p>
              <p>Price: ${p.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeCartItem(p._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
