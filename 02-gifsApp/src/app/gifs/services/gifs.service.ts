import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  searchGifs(search: string) {
    search = search.trim().toLowerCase();

    if (!this._historial.includes(search)) {
      this._historial.unshift(search);
    }

    //Show only 10 items
    this._historial = this._historial.splice(0, 10);

    // return fetch(
    //   `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&limit=10`
    // )
    //   .then((resp) => resp.json())
    //   .then((resp) => resp.data);
    console.log(this._historial);
  }
}
