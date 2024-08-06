import "./App.css"
import { Navbar, Footer } from './components/index.js';
import React from 'react';
import HomePage from './pages/Home.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}
export default App;