import React from "react";
import "./App.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="app-container">
      {/* <header className="header">
        <h1>Hi, I'm a Passionate AI Developer</h1>
        <p>I build intelligent tools that make life better.</p>
      </header> */}

      <main className="main-content">
        <motion.section 
          className="about"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            I'm an AI enthusiast with a strong passion for creating impactful machine learning applications. I enjoy working with natural language processing, computer vision, and deploying real-world AI tools that help people.
          </p>
        </motion.section>

        <section className="projects">
          <h2>Featured AI Projects</h2>

          <div className="project-grid">
            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>🧠 CodeName: MindReader</h3>
              <p>A transformer-based model that summarizes meeting transcripts and extracts key action items using OpenAI's GPT-4 API.</p>
              
            </motion.div>

            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>📷 CodeName: Visionary</h3>
              <p>A computer vision app that recognizes plant species from images and gives care tips using a fine-tuned ResNet model.</p>

            </motion.div>

            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>💬 CodeName: TalkBot</h3>
              <p>An AI-powered chatbot that mimics real human empathy and engages in natural conversation, built with GPT and sentiment analysis.</p>
             
            </motion.div>

            <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
              <h3>🧾 CodeName: TestGenie</h3>
              <p>A requirement-to-testcase generator using Azure OpenAI that transforms business specs into structured test cases.</p>
             
            </motion.div>
          </div>
        </section>

        <motion.section 
          className="contact"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Contact</h2>
          <p>
            Want to collaborate or ask something? Reach out on <a href="mailto:youremail@example.com">youremail@example.com</a>.
          </p>
        </motion.section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Passion AI Developer. All rights reserved.
      </footer>
    </div>
  );
}
