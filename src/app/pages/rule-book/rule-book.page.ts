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
  ];
  NAV = [
    {
      name: 'Composizione rosa',
      link: '/rule-book/intro',
      icon: 'football',
    },
    {
      name: 'Aste e proprietà',
      link: '/rule-book/property',
      icon: 'football',
    },
    {
      name: 'Gruppo WhatsApp',
      link: '/rule-book/whatsapp',
      icon: 'football',
    },
    {
      name: 'Scambi e trattative',
      link: '/rule-book/transfers',
      icon: 'football',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });
  }

  ngOnInit() {}
}
