import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ShortTeamPipe } from './pipes/short-team.pipe';
import { FormatNamePipe } from './pipes/format-name.pipe';

registerLocaleData(localeFr, 'de');

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de', // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [FormatNamePipe, ShortTeamPipe],
  declarations: [FormatNamePipe, ShortTeamPipe],
})
export class SharedModule {}
