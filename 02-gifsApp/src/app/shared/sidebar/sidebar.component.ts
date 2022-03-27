import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get historial() {
    return this.gifService.historial;
  }

  constructor(private gifService: GifsService) {}

  searchFromSidebar(querySearch: string) {
    this.gifService.searchGifs(querySearch);
  }
}
