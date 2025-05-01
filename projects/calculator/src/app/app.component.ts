import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatCardModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator'
  operators: string[] = ['+', '-', '*', '/'];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  result: number = 0;
  input: string = "";

  onOperatorClick(operator: string) {
    if(this.input === "" && this.result === 0) return;

    if(this.operators.includes(this.input[this.input.length - 1])) {
      this.input = this.input.slice(0, -1);
    }

    if(this.result !== 0 && this.input === "")
    {
      this.input = this.result.toString();
    }
    this.input += operator;

  };

  onEqualClick() : void {
    if(this.input === "" && this.operators.includes(this.input[this.input.length - 1])) return;
    this.result = this.evaluateCurrentExpression();
    this.input = "";
  };

  evaluateCurrentExpression() : number
  {
    const func = new Function('return ' + this.input);
    try {
      return func();
    } catch (error) {
      console.error("Error evaluating expression:", error);
      return 0;
    }
  }  

  onClearClick() {
    this.input = "";
    this.result = 0;
  };

  onNumberClick(number: number) {
    this.input += number.toString();
  };
}
