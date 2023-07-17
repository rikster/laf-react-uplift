/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
import AgentService from "./services/agentService";
import QuestionService from "./services/questionService";

function App() {
  const [answers, setAnswers] = useState({});
  const [matchedAgents, setMatchedAgents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // On component mount, get questions, and check if answered
  useEffect(() => {
    // replicate a network call - diff pattern than agentService given its doesnt return a promise
    // perhaps return a promise like agentService - to be consistent?
    // did this so jest tests would pass (await waitFor())
    const fetchQuestions = async () => {
      try {
        const fetchedQuestions = await QuestionService.getQuestions();
        setQuestions(fetchedQuestions);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchQuestions();

    const allQuestionsAnswered = questions.every(
      (question) => answers[question.id]
    );

    setIsValid(allQuestionsAnswered);
  }, [answers, questions]);

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

    setIsLoading(true);
    // returns a promise
    AgentService.findAgents(sizePreference, attributePreference)
      .then((matched) => {
        setMatchedAgents(matched);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
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
      <p>
        {!isValid && (
          <span>Please answer above questions before proceeding.</span>
        )}
      </p>
      <button
        type="button"
        onClick={handleMatch}
        disabled={!isValid || isLoading}
      >
        {isLoading ? "Loading..." : "Find My Agent"}
      </button>
      {error && (
        <div>
          <h2>An error occurred:</h2>
          <p>{error}</p>
        </div>
      )}
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
