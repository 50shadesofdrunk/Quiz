import { Component } from '@angular/core';
import { Quiz } from './quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';
  quizzes: any[] = JSON.parse(localStorage.getItem('quizStorage') || '[]')
  pageToShow = 'display'

  onQuizCreated(quizKey: Quiz) {
    console.log(quizKey.questions)
    this.quizzes.push(quizKey)
    localStorage.setItem('quizStorage', JSON.stringify(this.quizzes))

  }
}
