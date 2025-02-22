import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  correctAnswer = 13;

  checkAnswer() {
    const userAnswer = parseInt((<HTMLInputElement>document.getElementById('puzzle-answer')).value, 10);
    const feedback = document.getElementById('puzzle-feedback');

    if (userAnswer === this.correctAnswer) {
      feedback!.textContent = '🎉 Correct! Well done! 🎉';
      feedback!.style.color = 'green';
    } else {
      feedback!.textContent = '❌ Nope! Try again!';
      feedback!.style.color = 'red';
    }
  }
}
