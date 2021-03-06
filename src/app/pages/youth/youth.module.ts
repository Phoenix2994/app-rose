import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { YouthPageRoutingModule } from './youth-routing.module';

import { YouthPage } from './youth.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
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
    ExploreContainerComponentModule,
    YouthPageRoutingModule,
    SharedModule,
    ...MAT_MODULES,
  ],
  declarations: [YouthPage],
})
export class YouthPageModule {}
