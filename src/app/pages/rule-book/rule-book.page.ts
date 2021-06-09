import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-rule-book',
  templateUrl: './rule-book.page.html',
  styleUrls: ['./rule-book.page.scss'],
})
export class RuleBookPage implements OnInit {
  active = '';

  pages = [
    {
      title: 'Rosa',
      open: false,
      children: [
        {
          title: 'Composizione',
          url: '/rule-book/intro',
          icon: 'football',
        },
        {
          title: 'Scambi Rosa-Primavera',
          url: '/rule-book/exchangeRP',
          icon: 'football',
        },
      ],
    },
    {
      title: 'Aste e proprietà',
      open: false,
      children: [
        {
          title: 'Aste',
          url: '/rule-book/property',
          icon: 'football',
        },
        {
          title: 'Giocatori di proprietà',
          url: '/rule-book/property-players',
          icon: 'football',
        },
        {
          title: 'Rinnovo giocatori',
          url: '/rule-book/renewal-players',
          icon: 'football',
        },
        {
          title: 'Valore giocatore',
          url: '/rule-book/player-value',
          icon: 'football',
        },
        {
          title: 'Rimborsi',
          url: '/rule-book/refunds',
          icon: 'football',
        },
        {
          title: 'Asta intermedia',
          url: '/rule-book/middle-auction',
          icon: 'football',
        },
        {
          title: 'Mercato libero',
          url: '/rule-book/free-market',
          icon: 'football',
        },
      ],
    },
    {
      title: 'Gruppo WhatsApp',
      open: false,
      children: [
        {
          title: 'Espulsioni',
          url: '/rule-book/expel',
          icon: 'football',
        },
        {
          title: 'Votazioni',
          url: '/rule-book/vote',
          icon: 'football',
        },
      ],
    },
    {
      title: 'Scambi e Trattative',
      open: false,
      children: [
        {
          title: 'Finestre di mercato',
          url: '/rule-book/market-windows',
          icon: 'football',
        },
        {
          title: 'Regole generali',
          url: '/rule-book/rules',
          icon: 'football',
        },
        {
          title: 'Tipologie di trattativa',
          url: '/rule-book/deals',
          icon: 'football',
        },
        {
          title: 'Bonus',
          url: '/rule-book/bonus',
          icon: 'football',
        },
        {
          title: 'Clausole',
          url: '/rule-book/clause',
          icon: 'football',
        },
      ],
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });
  }

  ngOnInit() {}
}
