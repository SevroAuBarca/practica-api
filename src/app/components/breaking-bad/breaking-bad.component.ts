import { Component, OnInit } from '@angular/core';
import { BreackingBadService } from 'src/app/services/breacking-bad.service';

@Component({
  selector: 'app-breaking-bad',
  templateUrl: './breaking-bad.component.html',
  styleUrls: ['./breaking-bad.component.css'],
})
export class BreakingBadComponent implements OnInit {
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
