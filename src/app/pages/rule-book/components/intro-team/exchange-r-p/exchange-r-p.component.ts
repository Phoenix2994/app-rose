import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-r-p',
  templateUrl: './exchange-r-p.component.html',
  styleUrls: ['./exchange-r-p.component.scss'],
})
export class ExchangeRPComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/rule-book/free-market']);
  }
}
