import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRPComponent } from './components/exchange-r-p/exchange-r-p.component';
import { ExpelComponent } from './components/expel/expel.component';
import { FreeMarketComponent } from './components/free-market/free-market.component';
import { IntroComponent } from './components/intro/intro.component';
import { MiddleAuctionComponent } from './components/middle-auction/middle-auction.component';
import { PlayerValueComponent } from './components/player-value/player-value.component';
import { PropertyPlayersComponent } from './components/property-players/property-players.component';
import { PropertyComponent } from './components/property/property.component';
import { RefundsComponent } from './components/refunds/refunds.component';
import { RenewalPlayersComponent } from './components/renewal-players/renewal-players.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { VoteComponent } from './components/vote/vote.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';

import { RuleBookPage } from './rule-book.page';

const routes: Routes = [
  {
    path: '',
    component: RuleBookPage,
    children: [
      {
        path: 'intro',
        component: IntroComponent,
      },
      {
        path: 'exchangeRP',
        component: ExchangeRPComponent,
      },
      {
        path: 'property',
        component: PropertyComponent,
      },
      {
        path: 'property-players',
        component: PropertyPlayersComponent,
      },
      {
        path: 'renewal-players',
        component: RenewalPlayersComponent,
      },
      {
        path: 'free-market',
        component: FreeMarketComponent,
      },
      {
        path: 'middle-auction',
        component: MiddleAuctionComponent,
      },
      {
        path: 'refunds',
        component: RefundsComponent,
      },
      {
        path: 'player-value',
        component: PlayerValueComponent,
      },
      {
        path: 'whatsapp',
        component: WhatsappComponent,
      },
      {
        path: 'expel',
        component: ExpelComponent,
      },
      {
        path: 'vote',
        component: VoteComponent,
      },
      {
        path: 'transfers',
        component: TransfersComponent,
      },
      {
        path: '',
        redirectTo: '/rule-book/intro',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuleBookPageRoutingModule {}
