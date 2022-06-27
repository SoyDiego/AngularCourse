import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  lowerCaseName: string = 'diego';
  upperCaseName: string = 'DIEGO';
  fullName: string = 'DiEgO TeStiNg';
}
