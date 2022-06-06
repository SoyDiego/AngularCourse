import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string = 'Diego';
  value: number = 1000;

  showName () {
    console.log(this.name);
    console.log(this.value);
  }
}
