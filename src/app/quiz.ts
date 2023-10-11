import { Question } from "./question";

export class Quiz{
  questions: Question[] = [];

  constructor(questions: Question[]) {
    this.questions = questions
  }
}
