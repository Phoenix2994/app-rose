import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerPageRoutingModule } from './player-routing.module';

import { PlayerPage } from './player.page';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { RoundPipe } from './pipes/round.pipe';

registerLocaleData(localeFr, 'de');

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de', // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ],
  imports: [CommonModule, FormsModule, IonicModule, PlayerPageRoutingModule],
  declarations: [PlayerPage, RoundPipe],
})
export class PlayerPageModule {}
