import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
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
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  searchCountry(search: string) {
    this.hasError = false;
    this.search = search

    this.countryService.searchCountry(search).subscribe(
      (countries) => {
        this.countries = countries;
      }, (error) => {
        this.hasError = true;
        this.countries = [];
      }
    )

  }

}
