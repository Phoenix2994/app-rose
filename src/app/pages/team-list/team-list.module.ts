import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { TeamListPageRoutingModule } from './team-list-routing.module';

import { TeamListPage } from './team-list.page';

import { IonicImageLoaderModule } from 'ionic-image-loader-v5';

const MAT_MODULES = [MatListModule, MatCardModule];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...MAT_MODULES,
    TeamListPageRoutingModule,
    IonicImageLoaderModule
  ],
  declarations: [TeamListPage],
})
export class TeamListPageModule {}
