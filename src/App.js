import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Animations.css';


import { Navbar, Footer } from './Components/index.js';
import LoginPage from './Pages/LoginPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Cart from './Pages/Cart.jsx';
import HomePage from './Pages/Home.jsx';
import Contact from "./Pages/Contact.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./Pages/TermsConditions.jsx";
import FAQ from "./Pages/Faqs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import { OrderList } from './Pages/Orders.jsx';
import Contributors from "./Pages/Contributors.jsx";
import { Toast } from "./Toast/Toast.js";
import GoToTop from "./Components/GoToTop.jsx";
import License from "./Pages/Licensing.jsx";

import BookDetail from "./Pages/BookDetail.jsx"



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const appStyle = {
    backgroundColor: darkMode ? '#333' : '#f4f4f4',
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>

          <Route path="/" exact element={<HomePage darkMode={darkMode} />} />



          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/book-detail" element={<BookDetail />} /> {/* Add this line */}


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
