import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <main className="main">
        <motion.section 
          className="section about"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="gradient-text">AI</h1>
          <p className="tagline">
            Turning vision into value through intelligent automation. By designing AI-driven workflows that scale, we help businesses reduce costs, improve accuracy, and unlock insights from data. Whether it's predictive analytics or language intelligence, we make AI approachable and impactful.
          </p>
        </motion.section>

        <section className="section projects">
          <h2 className="section-title">✨ AI Projects</h2>
          <div className="project-grid">
            <ProjectCard 
              title="MindReader" 
              description="GPT-4 powered tool that distills meetings into crisp summaries." 
              emoji="🧠" 
            />
            <ProjectCard 
              title="Visionary" 
              description="AI vision model that recognizes plant species in real time." 
              emoji="🌿" 
            />
            <ProjectCard 
              title="TalkBot" 
              description="Conversational bot infused with emotional intelligence." 
              emoji="💬" 
            />
            <ProjectCard 
              title="TestGenie" 
              description="Auto-generates test cases from software requirements." 
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
          <h2 className="section-title">Got Ideas or Feedback?
Whether it's an innovative spark, a fresh perspective, or a tiny tweak you'd love to see — I’d really value your thoughts.
</h2>
          <p className="contact-text">📬 Reach out anytime at <a href="mailto:himsekmo@gmail.com">himsekmo@gmail.com</a></p>
        </motion.section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Passionate AI Developer</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, emoji }) {
  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="card-emoji">{emoji}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </motion.div>
  );
}
