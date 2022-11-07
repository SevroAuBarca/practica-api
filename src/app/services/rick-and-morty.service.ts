import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  URL = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  getCharacter(value: number) {
    const url = `${this.URL}/character/?page=${value}`;
    return this.http.get(url);
  }
}
