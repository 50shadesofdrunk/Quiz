import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions: any[] = JSON.parse(localStorage.getItem('qStorage') || '[]');
  // limit to 10 (9)
  questionCreated = false;
  newQuestion = {question: '', answer1: '', answer2: '', answer3: '', answer4: '', correctAnswer: ''}




  submitQuestion() {
    this.questions.push({...this.newQuestion})
    localStorage.setItem('qStorage', JSON.stringify(this.questions))

    this.newQuestion = {question: '', answer1: '', answer2: '', answer3: '', answer4: '', correctAnswer: ''}
  }

  submitQuiz() {

  }

  clear() {
    this.questions = [];
    localStorage.setItem('qStorage', JSON.stringify(this.questions))
  }
}

