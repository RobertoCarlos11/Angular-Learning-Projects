import { Component } from '@angular/core';
import { QuestionComponent } from "../../components/question/question.component";
import { Question } from '../../types/questionTypes';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [QuestionComponent, RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  constructor(private router: Router) { }
  Questions: Question[] = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: [
        { option: "Berlin", isCorrect: false },
        { option: "Madrid", isCorrect: false },
        { option: "Paris", isCorrect: true },
        { option: "Rome", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: [
        { option: "Earth", isCorrect: false },
        { option: "Jupiter", isCorrect: true },
        { option: "Mars", isCorrect: false },
        { option: "Saturn", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is the chemical symbol for gold?",
      options: [
        { option: "Au", isCorrect: true },
        { option: "Ag", isCorrect: false },
        { option: "Fe", isCorrect: false },
        { option: "Pb", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "What is the largest mammal in the world?",
      options: [
        { option: "Elephant", isCorrect: false },
        { option: "Blue Whale", isCorrect: true },
        { option: "Giraffe", isCorrect: false },
        { option: "Great White Shark", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "What is the speed of light?",
      options: [
        { option: "300,000 km/s", isCorrect: true },
        { option: "150,000 km/s", isCorrect: false },
        { option: "1,000,000 km/s", isCorrect: false },
        { option: "500,000 km/s", isCorrect: false }
      ]
    }
  ]

  currentQuestionIndex: number = 0;
  score: number = 0;
  resetCounter: number = 0;

  checkAnswer(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
      console.log("Correct Answer!");
    }
    this.currentQuestionIndex++;
  }

  submitQuiz()
  {
    alert(`Quiz submitted! Your score is ${this.score} out of ${this.Questions.length}`);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.resetCounter++;
    this.navigateTo("/home");
  }

  navigateTo(path: string)
  {
    this.router.navigate([path]);
  }

  resetQuiz()
  {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.resetCounter++;
  }
}
