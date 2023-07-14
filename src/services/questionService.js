// classes introduce oop, could also be functions
// classes can be instantiated, functions cannot, easier to test
class QuestionService {
  questions = [
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

  getQuestions() {
    return this.questions;
  }
}

export default new QuestionService();
