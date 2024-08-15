import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textarea heading="Enter the text to analyze" />} />
          <Route path="/Textarea" element={<Textarea heading="Enter the text to analyze" />} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
