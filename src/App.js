import "./App.css";
import { Navbar, Footer } from './Components/index.js';
import React from 'react';
import HomePage from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx'
import Faqs from './pages/Faqs.jsx'
import Policy from './pages/Policies.jsx'
import TermsConditions from "./pages/TermsConditions.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
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
