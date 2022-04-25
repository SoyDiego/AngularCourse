import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  search: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  searchCapital(search: string) {
    this.hasError = false;
    this.search = search
    this.countryService.searchCapital(search).subscribe(
      (countries) => {
        this.countries = countries;
      }, (error) => {
        this.hasError = true;
        this.countries = [];
      }
    )

  }

}
