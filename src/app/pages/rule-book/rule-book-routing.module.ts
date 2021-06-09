import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRPComponent } from './components/intro-team/exchange-r-p/exchange-r-p.component';
import { ExpelComponent } from './components/whatsapp-team/expel/expel.component';
import { FreeMarketComponent } from './components/auctions-property/free-market/free-market.component';
import { IntroComponent } from './components/intro-team/intro/intro.component';
import { MiddleAuctionComponent } from './components/auctions-property/middle-auction/middle-auction.component';
import { PlayerValueComponent } from './components/auctions-property/player-value/player-value.component';
import { PropertyPlayersComponent } from './components/auctions-property/property-players/property-players.component';
import { PropertyComponent } from './components/auctions-property/property/property.component';
import { RefundsComponent } from './components/auctions-property/refunds/refunds.component';
import { RenewalPlayersComponent } from './components/auctions-property/renewal-players/renewal-players.component';
import { VoteComponent } from './components/whatsapp-team/vote/vote.component';
import { WhatsappComponent } from './components/whatsapp-team/whatsapp/whatsapp.component';

import { RuleBookPage } from './rule-book.page';
import { MarketWindowsComponent } from './components/transfers/market-windows/market-windows.component';
import { DealsComponent } from './components/transfers/deals/deals.component';
import { BonusComponent } from './components/transfers/bonus/bonus.component';
import { ClauseComponent } from './components/transfers/clause/clause.component';
import { RulesComponent } from './components/transfers/rules/rules.component';

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
        path: 'market-windows',
        component: MarketWindowsComponent,
      },
      {
        path: 'deals',
        component: DealsComponent,
      },
      {
        path: 'bonus',
        component: BonusComponent,
      },
      {
        path: 'clause',
        component: ClauseComponent,
      },
      {
        path: 'rules',
        component: RulesComponent,
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
