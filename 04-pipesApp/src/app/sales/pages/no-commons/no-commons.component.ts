import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  name: string = 'Susana';
  genre: string = 'female';

  // i18nSelect
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['María', 'Juan', 'Pedro', 'Ricardo', 'Paco']
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  changePerson() {
    this.name = 'Juan';
    this.genre = 'male'
  }

  deleteClient() {
    this.clients.pop()
  }
}
