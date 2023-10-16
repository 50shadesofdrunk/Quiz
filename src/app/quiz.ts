import { Question } from "./question";

export class Quiz{
  questions: Question[] = [];
  quizName: string = ''

  constructor(questions: Question[]) {

    this.questions = questions
  }
}
