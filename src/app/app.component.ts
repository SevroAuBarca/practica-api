import { Component, OnInit } from '@angular/core';
import { BreackingBadService } from './services/breacking-bad.service';

BreackingBadService;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'router-practica';
  dataCharacters: any[] = [];
  constructor(private BB: BreackingBadService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.BB.getCharacters().subscribe((data: any) => {
      this.dataCharacters = data;
    });
  }
}
