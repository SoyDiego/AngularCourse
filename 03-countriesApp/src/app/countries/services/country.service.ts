import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "https://restcountries.com/v2"

  constructor(private http: HttpClient) { }

  searchCountry(query: string): Observable<any> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get(url);

  }
}
