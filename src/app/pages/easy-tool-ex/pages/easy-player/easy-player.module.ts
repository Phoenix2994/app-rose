import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyPlayerPageRoutingModule } from './easy-player-routing.module';

import { EasyPlayerPage } from './easy-player.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
]

@NgModule({
  imports: [
    ...MAT_MODULES,
    CommonModule,
    FormsModule,
    IonicModule,
    EasyPlayerPageRoutingModule
  ],
  declarations: [EasyPlayerPage]
})
export class EasyPlayerPageModule {}
