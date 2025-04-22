import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Option, Question } from '../../types/questionTypes';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  imports: [NgIf,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Output() UserAnswer = new EventEmitter<boolean>();
  @Input() question: Question = {
    id: 0,
    question: "",
    options: []
  };
  @Input() resetSignal: number = 0;

  optionClicked: Option | null = null;

  reset() {
    this.optionClicked = null;
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['resetSignal']) {
      this.reset();
    }
  }

  SendAnswer(option: Option) {
      this.UserAnswer.emit(option.isCorrect);
  }
}