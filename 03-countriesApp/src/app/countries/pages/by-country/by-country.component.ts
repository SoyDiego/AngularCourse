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

  constructor(private countryService: CountryService) { }

  searchCountry() {

    this.countryService.searchCountry(this.search).subscribe(
      (data) => {
        console.log(data);
      }
    )

  }

}
