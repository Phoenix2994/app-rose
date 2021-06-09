import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuleBookPageRoutingModule } from './rule-book-routing.module';

import { RuleBookPage } from './rule-book.page';
import { IntroComponent } from './components/intro-team/intro/intro.component';
import { ExchangeRPComponent } from './components/intro-team/exchange-r-p/exchange-r-p.component';
import { PropertyComponent } from './components/auctions-property/property/property.component';
import { PropertyPlayersComponent } from './components/auctions-property/property-players/property-players.component';
import { RenewalPlayersComponent } from './components/auctions-property/renewal-players/renewal-players.component';
import { FreeMarketComponent } from './components/auctions-property/free-market/free-market.component';
import { MiddleAuctionComponent } from './components/auctions-property/middle-auction/middle-auction.component';
import { RefundsComponent } from './components/auctions-property/refunds/refunds.component';
import { ExpelComponent } from './components/whatsapp-team/expel/expel.component';
import { VoteComponent } from './components/whatsapp-team/vote/vote.component';
import { WhatsappComponent } from './components/whatsapp-team/whatsapp/whatsapp.component';
import { PlayerValueComponent } from './components/auctions-property/player-value/player-value.component';
import { MarketWindowsComponent } from './components/transfers/market-windows/market-windows.component';
import { DealsComponent } from './components/transfers/deals/deals.component';
import { BonusComponent } from './components/transfers/bonus/bonus.component';
import { ClauseComponent } from './components/transfers/clause/clause.component';
import { RulesComponent } from './components/transfers/rules/rules.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RuleBookPageRoutingModule],
  declarations: [
    RuleBookPage,
    PlayerValueComponent,
    IntroComponent,
    ExchangeRPComponent,
    PropertyComponent,
    PropertyPlayersComponent,
    RenewalPlayersComponent,
    FreeMarketComponent,
    MiddleAuctionComponent,
    RefundsComponent,
    ExpelComponent,
    VoteComponent,
    WhatsappComponent,
    MarketWindowsComponent,
    DealsComponent,
    BonusComponent,
    ClauseComponent,
    RulesComponent,
  ],
})
export class RuleBookPageModule {}
