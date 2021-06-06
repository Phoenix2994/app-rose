import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expel',
  templateUrl: './expel.component.html',
  styleUrls: ['./expel.component.scss'],
})
export class ExpelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/rule-book/free-market']);
  }
}
