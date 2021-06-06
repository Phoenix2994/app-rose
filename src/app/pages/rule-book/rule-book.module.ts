import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuleBookPageRoutingModule } from './rule-book-routing.module';

import { RuleBookPage } from './rule-book.page';
import { IntroComponent } from './components/intro/intro.component';
import { ExchangeRPComponent } from './components/exchange-r-p/exchange-r-p.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertyPlayersComponent } from './components/property-players/property-players.component';
import { RenewalPlayersComponent } from './components/renewal-players/renewal-players.component';
import { FreeMarketComponent } from './components/free-market/free-market.component';
import { MiddleAuctionComponent } from './components/middle-auction/middle-auction.component';
import { RefundsComponent } from './components/refunds/refunds.component';
import { ExpelComponent } from './components/expel/expel.component';
import { VoteComponent } from './components/vote/vote.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RuleBookPageRoutingModule],
  declarations: [
    RuleBookPage,
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
    TransfersComponent,
    WhatsappComponent,
  ],
})
export class RuleBookPageModule {}
