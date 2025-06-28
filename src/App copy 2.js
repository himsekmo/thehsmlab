import React from "react";
import "./App.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h1>Hi, I'm a Passionate AI Developer</h1>
          <p>I design intelligent systems that impact the world.</p>
        </motion.div>
      </header>

      <main className="main">
        <motion.section 
          className="section about"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            I'm an AI developer specialized in building smart, scalable applications using modern AI models and frameworks. My projects range from natural language processing to intelligent automation tools.
          </p>
        </motion.section>

        <section className="section projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <ProjectCard 
              title="MindReader" 
              description="GPT-4 powered meeting summary generator." 
              link="https://github.com/yourusername/mindreader" 
              emoji="🧠" 
            />
            <ProjectCard 
              title="Visionary" 
              description="Deep learning model for plant identification." 
              link="https://github.com/yourusername/visionary" 
              emoji="🌿" 
            />
            <ProjectCard 
              title="TalkBot" 
              description="Empathetic AI chatbot using GPT + sentiment detection." 
              link="https://github.com/yourusername/talkbot" 
              emoji="💬" 
            />
            <ProjectCard 
              title="TestGenie" 
              description="AI tool that generates test cases from requirements." 
              link="https://github.com/yourusername/testgenie" 
              emoji="🧾" 
            />
          </div>
        </section>

        <motion.section 
          className="section contact"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2>Contact</h2>
          <p>Email me at <a href="mailto:youremail@example.com">youremail@example.com</a></p>
        </motion.section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Passion AI Developer. Built with React.</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link, emoji }) {
  return (
    <motion.div className="card" whileHover={{ scale: 1.05 }}>
      <h3>{emoji} {title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
    </motion.div>
  );
}
