/* eslint-disable no-plusplus */
import React, { useState, useEffect  } from "react";
import AgentService from "./services/agentService";
import QuestionService from "./services/questionService";

function App() {
  const [answers, setAnswers] = useState({});
  const [matchedAgents, setMatchedAgents] = useState([]);
  const [questions, setQuestions] = useState([]);

  // On component mount, get questions
  useEffect(() => {
    setQuestions(QuestionService.getQuestions());
  }, []);

  function handleAnswer(questionId, option) {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      newAnswers[questionId] = option;
      return newAnswers;
    });
  }

  function handleMatch() {
    const sizePreference = answers[1] && answers[1].value;
    const attributePreference = answers[2] && answers[2].attr;

    AgentService.findAgents(sizePreference, attributePreference)
      .then((matched) => {
        setMatchedAgents(matched);
      })
      .catch((err) => {
        console.error("An error occurred:", err);
      });
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
