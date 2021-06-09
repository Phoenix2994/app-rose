import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-players',
  templateUrl: './property-players.component.html',
  styleUrls: ['./property-players.component.scss'],
})
export class PropertyPlayersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/rule-book/property']);
  }
}
