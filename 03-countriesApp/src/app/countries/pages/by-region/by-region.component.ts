import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {
  regions: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {

    if (region === this.activeRegion) {
      return;
    }

    this.activeRegion = region;

    this.countryService.getCountryByRegion(region).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.countries = [];
      }
    );
  }

  getCSSClass(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary me-1 mb-1'
      : 'btn btn-outline-primary me-1 mb-1';
  }
}
