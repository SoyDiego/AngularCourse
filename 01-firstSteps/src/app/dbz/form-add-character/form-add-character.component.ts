import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-add-character',
  templateUrl: './form-add-character.component.html',
})
export class FormAddCharacterComponent {
  @Input() new: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {}

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addCharacter(): void {
    if (this.new.name.trim().length === 0) {
      return;
    }

    // this.onNewCharacter.emit(this.new);
    this.dbzService.addCharacter(this.new);

    this.new = {
      name: '',
      power: 0,
    };
  }
}
