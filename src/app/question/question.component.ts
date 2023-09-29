import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions: any[] = []
  questionCreated = false;
  newQuestion = {question: '', answer1: '', answer2: '', answer3: '', answer4: ''}


  submitQuestion() {
    // this.questions.push({this.newQuestion})
    console.log(this.newQuestion)
    // return this.newQuestion

  }
}
