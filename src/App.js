import "./App.css";
import './Animations.css'
import { Navbar, Footer } from './components/index.js';
import React from 'react';
// import Home from './pages/Home.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} /> {/* This ensures Home is the default */}
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
