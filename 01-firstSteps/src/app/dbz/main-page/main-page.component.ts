import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

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

  addNewCharacter(character: Character): void {
    this.characters.push(character)
  }

  constructor(private dbzService: DbzService) {
    
  }
}
