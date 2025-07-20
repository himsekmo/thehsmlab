import React, { useState } from 'react';
import './styles.css'; // Link to your CSS file

const questions = [
  "Does the child make limited or no eye contact?",
  "Does the child respond to their name by 12 months?",
  "Does the child repeat words or phrases (echolalia)?",
  "Does the child engage in pretend play?",
  "Is the child unusually sensitive to loud sounds or textures?",
  "Does the child perform repetitive hand movements like flapping?",
  "Does the child avoid playing with others or prefer being alone?",
  "Is there a delay in speech or language development?"
];

export default function AutismChecklist() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value === "yes";
    setAnswers(updated);
  };

  const handleSubmit = () => setShowResult(true);

  const totalYes = answers.filter(Boolean).length;

  return (
    <div className="container">
      <h1>Early Autism Behavior Checklist</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((q, i) => (
          <div key={i} className="question">
            <p>{q}</p>
            <label>
              <input
                type="radio"
                name={`q${i}`}
                value="yes"
                onChange={(e) => handleChange(i, e.target.value)}
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name={`q${i}`}
                value="no"
                onChange={(e) => handleChange(i, e.target.value)}
              /> No
            </label>
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </form>

      {showResult && (
        <div className="result">
          <h2>Preliminary Results:</h2>
          <p>{totalYes} out of {questions.length} behaviors marked "Yes".</p>
          <p>
            This checklist is not a diagnosis. Please consult a qualified professional for a formal evaluation.
          </p>
        </div>
      )}
    </div>
  );
}