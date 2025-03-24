/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "./Animations.css";
import { Navbar, Footer, ProfilePage } from "./components/index.js";
// login page
import {
  Login,
  SignUp,
  ForgotPassword,
  Logout,
} from "./pages/loginpage/loginindex.js";

import HomePage from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsConditions.jsx";
import FAQ from "./pages/Faqs.jsx";
import AboutUs from "./pages/AboutUs.jsx";

import OrderList from "./pages/Orders.jsx"; // Import Order List
import OrderTracking from "./pages/OrderTracking";
import Contributors from "./pages/Contributors.jsx";
import { Toast } from "./Toast/Toast.js";
import GoToTop from "./components/GoToTop.jsx";
import License from "./pages/Licensing.jsx";
import HomeCard from "./components/HomepageCard/HomeCard.js";
import Categories from "./components/BookCategories/Categories.js";
import Book from "./components/BookDetails/Book.js";
import CartPage from "./pages/CartPage.jsx";
import WrappedCartPage from "./pages/CartPage.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const appStyle = {
    backgroundColor: darkMode ? "#333" : "#f4f4f4",
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cart" element={<CartPage darkMode={darkMode} />} />
          <Route path="/orders" element={<OrderList />} />{" "}
          {/* My Orders Page */}
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/homeCard" element={<HomeCard />} />
          <Route path="/homeCard/book/:bookId" element={<Book />} />
          <Route path="/book/:bookId" element={<Book />} />{" "}
          {/* Add this route */}
          <Route path="/cartpage" element={<WrappedCartPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/licensing" element={<License />} />
          <Route path="/termsConditions" element={<TermsAndConditions />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
        <Toast position="bottom-right" />
        <Footer />
        <GoToTop />
      </div>
    </Router>
  );
}

export default App;
