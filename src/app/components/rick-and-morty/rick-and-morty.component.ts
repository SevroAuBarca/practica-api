import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css'],
})
export class RickAndMortyComponent implements OnInit {
  dataCharacters: any[] = [];
  pages = 1;

  constructor(private RyM: RickAndMortyService) {}

  ngOnInit(): void {
    this.getAll('*');
  }

  getAll(val: string) {
    if (val == '-' && this.pages === 1) this.pages = 42;
    if (val == '+' && this.pages === 42) this.pages = 1;
    if (val === '+') this.pages = this.pages + 1;
    if (val === '-') this.pages = this.pages - 1;

    this.RyM.getCharacter(this.pages).subscribe((data: any) => {
      this.dataCharacters = data.results;
      console.log(this.dataCharacters);
    });
  }
}
