/* eslint-disable no-plusplus */
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "What size of business do you prefer?",
    options: [
      { id: 1, text: "Small operation", value: 10 },
      { id: 2, text: "Medium boutique operations", value: 20 },
      { id: 3, text: "Big enterprise", value: 30 },
    ],
  },
  {
    id: 2,
    text: "What is your top preference in an agent?",
    options: [
      { id: 1, text: "Local knowledge", attr: "localKnowledge" },
      { id: 2, text: "Best outcome", attr: "bestOutcome" },
      {
        id: 3,
        text: "Patience and understanding",
        attr: "patienceUnderstanding",
      },
      {
        id: 4,
        text: "Trustworthiness and reliability",
        attr: "trustworthinessReliability",
      },
    ],
  },
];

const agents = [
  {
    id: 1,
    name: "John Smith",
    localKnowledge: 8,
    bestOutcome: 9,
    patienceUnderstanding: 7,
    trustworthinessReliability: 8,
    businessSize: 10,
  },
  {
    id: 2,
    name: "Jane Doe",
    localKnowledge: 7,
    bestOutcome: 8,
    patienceUnderstanding: 8,
    trustworthinessReliability: 7,
    businessSize: 20,
  },
  {
    id: 3,
    name: "Bob Johnson",
    localKnowledge: 9,
    bestOutcome: 10,
    patienceUnderstanding: 8,
    trustworthinessReliability: 9,
    businessSize: 30,
  },
  {
    id: 4,
    name: "Mike Williams",
    localKnowledge: 6,
    bestOutcome: 7,
    patienceUnderstanding: 7,
    trustworthinessReliability: 6,
    businessSize: 20,
  },
  {
    id: 5,
    name: "Emma Johnson",
    localKnowledge: 10,
    bestOutcome: 9,
    patienceUnderstanding: 10,
    trustworthinessReliability: 10,
    businessSize: 10,
  },
];

function App() {
  const [answers, setAnswers] = useState({});
  const [matchedAgents, setMatchedAgents] = useState([]);

  function handleAnswer(questionId, option) {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      newAnswers[questionId] = option;
      return newAnswers;
    });
  }

  function agentResultsService(sizePreference, attributePreference, callback) {
    setTimeout(() => {
      for (let i = 0; i < agents.length; i++) {
        const agent = agents[i];
        if (
          agent.businessSize === sizePreference &&
          agent[attributePreference] >= 5
        ) {
          callback(null, agent);
          return;
        }
      }
      callback(new Error("No matching agent found"));
    }, 2000);
  }


  function handleMatch() {
    const sizePreference = answers[1] && answers[1].value;
    const attributePreference = answers[2] && answers[2].attr;

    agentResultsService(sizePreference, attributePreference, (err, matched) => {
      if (err) {
        console.error("An error occurred:", err);
      }
    });

    // 'matched' is undefined here because agentResultsService is async (setTimeout)
    setMatchedAgents([matched]);
  }

  return (
    <div>
      <h1>Find Your Agent</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.text}</h2>
          {question.options.map((option) => (
            <div key={option.id}>
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  onChange={() => handleAnswer(question.id, option)}
                />
                {option.text}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button type="button" onClick={handleMatch}>
        Find My Agent
      </button>
      {matchedAgents.length > 0 && (
        <div>
          <h2>Matched Agents:</h2>
          <ul>
            {matchedAgents.map((agent) => (
              <li key={agent.id}>{agent.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
