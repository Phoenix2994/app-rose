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

import { RenewalPageRoutingModule } from './renewal-routing.module';

import { RenewalPage } from './renewal.page';
import { SharedModule } from 'src/app/shared/shared.module';

const MAT_MODULES = [
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...MAT_MODULES,
    RenewalPageRoutingModule,
    SharedModule,
  ],
  declarations: [RenewalPage],
})
export class RenewalPageModule {}
