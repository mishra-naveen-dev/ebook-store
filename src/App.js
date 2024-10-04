import "./App.css";


import './Animations.css'
import { Navbar, Footer } from './components/index.js';
import { useState, useEffect } from 'react';
import React from 'react';
// import Home from './pages/Home.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
<<<<<<< HEAD
import Contact from './pages/Contact.jsx'
import Faqs from './pages/Faqs.jsx'
import Policy from './pages/Policies.jsx'
import TermsConditions from "./pages/TermsConditions.jsx";
=======
import Contact from './pages/Contact.jsx';


>>>>>>> fe0e88ec3f7a96d898c43725aa40316f1a01325d

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
          <Route path="/" exact element={<Home darkMode={darkMode} />} /> {/* This ensures Home is the default */}
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/faqs" exact element={<Faqs/>} />
          <Route path="/policy" exact element={<Policy/>} />
          <Route path="/termsConditions" exact element={<TermsConditions/>}/>
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
