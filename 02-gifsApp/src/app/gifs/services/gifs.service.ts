import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, GIFSearchResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private url: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = environment.apiKey;
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];

    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  searchGifs(search: string) {
    search = search.trim().toLowerCase();

    if (!this._historial.includes(search)) {
      this._historial.unshift(search);
    }

    //Show only 10 items
    this._historial = this._historial.splice(0, 10);

    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', search);

    this.http
      .get<GIFSearchResponse>(`${this.url}/search`, { params })
      .subscribe((response) => {
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
