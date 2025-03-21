import React, { useState, useEffect } from "react";
import { useCart } from "../Context/cart.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { Navbar, Footer } from "../components";
import GoToTop from "../components/GoToTop";

const stripePromise = loadStripe(
  "pk_test_51R2BXgPgyEOgZb4Wd5QsDfu9JL1jV4wgDjhOzqSkyTItpH3OOErLYmQMFFOx7eMi9yxF10xhJxy9AykZWzgOoN8L00LRh1HwwK"
);

const CartPage = ({ darkMode }) => {
  const [cart, setCart] = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  // Fetch client secret when cart updates
  useEffect(() => {
    const getClientSecret = async () => {
      if (cart.length > 0) {
        try {
          const { data } = await axios.post(
            "/api/v1/product/create-payment-intent",
            { cart }
          );
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.error("Error fetching client secret:", error);
        }
      }
    };
    getClientSecret();
  }, [cart]);

  // Handle Stripe payment
  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      toast.error("Payment failed");
      setLoading(false);
    } else if (paymentIntent.status === "succeeded") {
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully");
      setLoading(false);
    }
  };

  // Calculate total price
  const totalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    const updatedCart = cart.filter((item) => item._id !== pid);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Navbar darkMode={darkMode} />
      <div className="container">
        <h1 className="text-center">Hello, Guest</h1>
        <h4 className="text-center">
          {cart.length
            ? `You have ${cart.length} item(s) in your cart`
            : "Your Cart is Empty"}
        </h4>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((p) => (
              <div className="cart-item" key={p._id}>
                <img
                  src={`/api/v1/product/product-image/${p._id}`}
                  alt={p.name}
                  className="cart-img"
                />
                <div className="cart-details">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)}...</p>
                  <p>Price: {p.price}</p>
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

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <h4>Total: {totalPrice()}</h4>

            {/* Stripe Payment */}
            {clientSecret && cart.length > 0 && (
              <form onSubmit={handlePayment}>
                <CardElement />
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Make Payment"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

const WrappedCartPage = ({ darkMode }) => (
  <Elements stripe={stripePromise}>
    <CartPage darkMode={darkMode} />
  </Elements>
);

export default WrappedCartPage;
