import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  // styleUrls: ['./app.component.css'],
})
export class HeroeComponent {
  name: string = 'ironman';
  age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }
}
