import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTeamsPageRoutingModule } from './select-teams-routing.module';

import { SelectTeamsPage } from './select-teams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectTeamsPageRoutingModule
  ],
  declarations: [SelectTeamsPage]
})
export class SelectTeamsPageModule {}
