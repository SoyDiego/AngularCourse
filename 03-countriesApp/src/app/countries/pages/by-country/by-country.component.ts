import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  search: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

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

  suggestions(search: string) {
    this.hasError = false;
    this.search = search;
    this.showSuggested = true;
    this.countryService.searchCountry(search).subscribe(
      {
        next: (countries) => this.suggestedCountries = countries.splice(0, 5),
        error: (error) => this.suggestedCountries = []
      }

    )
  }

  searchSuggestedCountry(search: string) {
    this.searchCountry(search)
    this.showSuggested = false;
  }
}