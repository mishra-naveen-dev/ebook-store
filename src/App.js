import "./App.css";


import './Animations.css'
import { Navbar, Footer } from './components/index.js';
import { useState, useEffect } from 'react';
import React from 'react';
// import Home from './pages/Home.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';



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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
