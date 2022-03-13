import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  new: Character = {
    name: 'Trunks',
    power: 14000,
  };

  addCharacter() {
    console.log('Adding new character:', this.new);
  }

  changeName(name: any) {
    this.new.name = name;
  }
}
