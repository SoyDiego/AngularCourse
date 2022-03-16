import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: Character[] = [
    { name: 'Goku', power: 9000 },
    { name: 'Vegeta', power: 8000 },
    { name: 'Piccolo', power: 7000 },
    { name: 'Gohan', power: 6000 },
  ];

  new: Character = {
    name: '',
    power: 0,
  };

  addCharacter() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.characters.push(this.new);
    this.new = {
      name: '',
      power: 0,
    };
  }

}
