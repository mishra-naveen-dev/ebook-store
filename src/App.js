import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Animations.css";

import { Navbar, Footer } from "./components/index.js";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

import HomePage from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsConditions.jsx";
import FAQ from "./pages/Faqs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { OrderList } from "./pages/Orders.jsx";
import Contributors from "./pages/Contributors.jsx";
import { Toast } from "./Toast/Toast.js";
import GoToTop from "./components/GoToTop.jsx";
import License from "./pages/Licensing.jsx";

import HomeCard from "./components/HomepageCard/HomeCard.js";
import Categories from "./components/BookCategories/Categories.js";
import Book from "./components/BookDetails/Book.js";

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
          <Route path="/" exact element={<HomePage darkMode={darkMode} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/orders" element={<OrderList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/policy" element={<PrivacyPolicy />} />

          <Route path="/homeCard" element={<HomeCard />} />
          <Route path="/book/:bookId" element={<Book />} />

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
