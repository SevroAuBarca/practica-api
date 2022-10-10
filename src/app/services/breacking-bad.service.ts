import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BreackingBadService {
  //Escribir URL Donde se hara la peticion
  URL = 'https://www.breakingbadapi.com/api';

  constructor(private http: HttpClient) {}

  //+ Realizar peticion
  getCharacters() {
    const url = `${this.URL}/characters`;
    return this.http.get(url);
  }
}
