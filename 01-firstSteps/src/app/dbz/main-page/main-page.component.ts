import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  new: Character = {
    name: '',
    power: 0,
  };

  constructor() {
    
  }
}
