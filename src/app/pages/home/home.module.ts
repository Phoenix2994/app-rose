import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

const MAT_MODULES = [MatListModule, MatCardModule];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...MAT_MODULES,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
