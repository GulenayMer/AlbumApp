import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Album from "./components/Album";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-albums" element={<Album />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
