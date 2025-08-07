import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import KeySpeaker from "./KeySpeaker"; // ✅ Import toddler learning page

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToddlerLearning, setShowToddlerLearning] = useState(false); // ✅ New state for navigation

  // ✅ If Toddler Learning is selected, show KeySpeaker
  if (showToddlerLearning) {
    return (
      <div className={`container "light"}`}>
        <button
          onClick={() => setShowToddlerLearning(false)}
          style={{
            margin: "20px",
            padding: "10px 15px",
            fontSize: "18px",
            borderRadius: "8px",
            background: "#ffcc00",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⬅ Back to Home
        </button>
        <KeySpeaker />
      </div>
    );
  }

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      {/* Theme toggle */}
      {/* <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div> */}

      <main className="main">
        {/* About Section */}
        <motion.section
          className="section about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <h1 className="gradient-text">AI</h1> */}
          <p className="card-description">
            Transforming ideas into intelligent, scalable AI solutions -
            empowering innovation through thoughtful design, data driven
            insights, and future ready architecture. Whether it's predictive
            analytics or language intelligence, we make AI approachable and
            impactful.
          </p>
        </motion.section>

        {/* ✅ AI Projects Section */}
        <section className="section projects">
          <h2 className="section-title">✨ Projects</h2>
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

            {/* ✅ New Toddler Learning Card */}
            <motion.div
              className="card"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setShowToddlerLearning(true)}
              style={{ cursor: "pointer", background: "#ffe4b5" }}
            >
              <div className="card-emoji">🎨</div>
              <h3 className="card-title">Toddler Learning</h3>
              <p className="card-description">
                Fun interactive letter learning for kids! 🧒
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
 <motion.section
  className="section contact feedback-grid"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <p className="card-description">
   <i> Got Ideas or Feedback? Whether it's an innovative spark, a fresh perspective, or a tiny tweak you'd love to see — I’d really value your thoughts.
    <br />📬 Reach out at{" "} <a href="mailto:Support@thehsmlab.com">Support@thehsmlab.com</a>
 </i> </p>
</motion.section>

      </main>

      <footer className="footer">
        <p> Powered by ThehsmLab © {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}

// ✅ Project Card Component
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
