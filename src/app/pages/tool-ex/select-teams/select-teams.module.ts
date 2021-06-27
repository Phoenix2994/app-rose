import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

import { SelectTeamsPageRoutingModule } from './select-teams-routing.module';

import { SelectTeamsPage } from './select-teams.page';
import { SharedModule } from 'src/app/shared/shared.module';

const MAT_MODULES = [
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatTabsModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SelectTeamsPageRoutingModule,
    ...MAT_MODULES,
  ],
  declarations: [SelectTeamsPage],
})
export class SelectTeamsPageModule {}
