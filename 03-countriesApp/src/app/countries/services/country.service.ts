import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlphaCode(query: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${query}`;
    return this.http.get<Country>(url);
  }

  getCountryByRegion(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams }).pipe(tap(data => console.log(data)));
  }
}
