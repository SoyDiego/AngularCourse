import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  search: string = '';
  hasError: boolean = false;

  constructor(private countryService: CountryService) { }

  searchCountry() {
    this.hasError = false;

    this.countryService.searchCountry(this.search).subscribe(
      (countries) => {
        console.log(countries);
      }, (error) => {
        this.hasError = true;
        console.log(error);
      }
    )

  }

}
