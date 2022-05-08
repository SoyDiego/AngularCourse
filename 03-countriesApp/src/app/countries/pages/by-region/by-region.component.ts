import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor() {}

  activateRegion(region: string) {
    this.activeRegion = region;
  }

  getCSSClass(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary me-2'
      : 'btn btn-outline-primary me-2';
  }
}
