import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>Base Number is: {{ base }}</h3>

    <button (click)="changeValue(base)">+ {{ base }}</button>

    <span>{{ initCounter }}</span>

    <button (click)="changeValue(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'CounterApp';
  initCounter: number = 0;

  base: number = 5;

  changeValue(value: number) {
    this.initCounter += value;
  }
}
