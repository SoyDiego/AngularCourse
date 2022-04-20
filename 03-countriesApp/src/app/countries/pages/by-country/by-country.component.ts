import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  search: string = '';

  constructor() { }

  searchCountry(){
    console.log(this.search);
  }

}
