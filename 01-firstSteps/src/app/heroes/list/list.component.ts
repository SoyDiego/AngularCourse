import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  deletedHero: string = '';

  deleteHero = () => {
    const deletedHero = this.heroes.pop() || '';
    this.deletedHero = deletedHero;
  };
}
