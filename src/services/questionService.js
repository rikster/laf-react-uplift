import questionsData from "../data/questionsData";

// classes introduce oop, could also be functions
class QuestionService {
  // this is a property, that could populated from a API request
  questions = questionsData;

  getQuestions() {
    return this.questions;
  }
}

export default new QuestionService();
