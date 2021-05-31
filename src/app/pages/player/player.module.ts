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
import { SharedModule } from 'src/app/shared/shared.module';
import { FootPipe } from './pipes/foot.pipe';
import { ContractPipe } from './pipes/contract.pipe';
import { RolePipe } from './pipes/role.pipe';

registerLocaleData(localeFr, 'de');

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de', // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule,
    SharedModule,
  ],
  declarations: [PlayerPage, RoundPipe, FootPipe, ContractPipe, RolePipe],
})
export class PlayerPageModule {}
