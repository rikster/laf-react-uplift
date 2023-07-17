import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "./app";
import QuestionService from "./services/questionService";
import AgentService from "./services/agentService";

jest.mock("./services/questionService");
jest.mock("./services/agentService");

const mockQuestions = [
  {
    id: 1,
    text: "What size of business do you prefer?",
    options: [
      { id: 1, text: "Small operation", value: 10 },
      { id: 2, text: "Medium boutique operations", value: 20 },
      { id: 3, text: "Big enterprise", value: 30 },
    ],
  },
];

const mockAgents = [
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
];

test("renders App and matches questions", async () => {
  QuestionService.getQuestions.mockResolvedValue(mockQuestions);

  render(<App />);

  await waitFor(() => {
    mockQuestions.forEach((question) => {
      expect(screen.getByText(question.text)).toBeInTheDocument();
    });
  });
});

test("selects answers and finds agents", async () => {
  QuestionService.getQuestions.mockResolvedValue(mockQuestions);
  AgentService.findAgents.mockResolvedValue(mockAgents);

  render(<App />);

  await waitFor(() => {
    // Simulate selecting answers and click "Find My Agent"
    mockQuestions.forEach((question) => {
      fireEvent.click(screen.getByLabelText(question.options[0].text));
    });

    fireEvent.click(screen.getByText("Find My Agent"));
  });

  await waitFor(() => expect(AgentService.findAgents).toHaveBeenCalledTimes(1));

  // Checks if agents are displayed correctly
  mockAgents.forEach((agent) => {
    expect(screen.getByText(agent.name)).toBeInTheDocument();
  });
});
