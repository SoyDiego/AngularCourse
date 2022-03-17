import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { name: 'Goku', power: 9000 },
    { name: 'Vegeta', power: 8000 },
    { name: 'Piccolo', power: 7000 },
    { name: 'Gohan', power: 6000 },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }
  constructor() {}

  addCharacter(character: Character) {
      this._characters.push(character);
  }
}
