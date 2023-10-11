import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../question';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions: any[] = JSON.parse(localStorage.getItem('qStorage') || '[]');
  // limit to 10 (9)
  questionCreated = false;
  newQuestion: Question = new Question()
  @Output() quizCreated = new EventEmitter<Quiz>()
  qCount = 0





  submitQuestion() {
      this.questions.push({...this.newQuestion})
      localStorage.setItem('qStorage', JSON.stringify(this.questions))

      this.newQuestion = new Question()
      this.qCount++;
      console.log(this.qCount)
  }

  submitQuiz() {
  this.quizCreated.emit(new Quiz(this.questions))
  }

  clear() {
    this.questions = [];
    localStorage.setItem('qStorage', JSON.stringify(this.questions))
    this.qCount = 0;
  }
}

