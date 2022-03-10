import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'CounterApp';
  initCounter: number = 0;

  base: number = 5;

  changeValue(value: number) {
    this.initCounter += value;
  }
}
