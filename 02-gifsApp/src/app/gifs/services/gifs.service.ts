import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, GIFSearchResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = environment.apiKey;
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  searchGifs(search: string) {
    search = search.trim().toLowerCase();

    if (!this._historial.includes(search)) {
      this._historial.unshift(search);
    }

    //Show only 10 items
    this._historial = this._historial.splice(0, 10);

    this.http
      .get<GIFSearchResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${search}&limit=25`
      )
      .subscribe((response) => {
        this.results = response.data;
      });
  }
}
