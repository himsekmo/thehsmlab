import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import KeySpeaker from "./KeySpeaker";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`container ${darkMode ? "dark" : "light"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keyspeaker" element={<KeySpeaker />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <main className="main">
      <motion.section 
        className="section about"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h1 className="gradient-text">AI</h1>
        <p className="tagline">
          Transforming ideas into intelligent, scalable AI solutions...
        </p>
      </motion.section>

      {/* Your existing sections stay the same */}
    </main>
  );
}

// Existing ProjectCard stays the same...
