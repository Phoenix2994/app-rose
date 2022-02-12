import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { IonicModule } from '@ionic/angular';

import { EasyTeamPageRoutingModule } from './easy-team-routing.module';

import { EasyTeamPage } from './easy-team.page';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';

registerLocaleData(localeFr, 'de');

const MAT_MODULES = [
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  imports: [
    ...MAT_MODULES,
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EasyTeamPageRoutingModule
  ],
  declarations: [EasyTeamPage],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de', // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ]
})
export class EasyTeamPageModule {}
