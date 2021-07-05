import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ToolExchangePageRoutingModule } from './tool-exchange-routing.module';

import { ToolExchangePage } from './tool-exchange.page';
import { ContractTypeMapPipe } from '../pipes/contract-type-map.pipe';
import { BonusComputePipe } from '../pipes/bonus-compute.pipe';
import { RoundPipe } from '../pipes/round.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolExchangePageRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    IonicModule.forRoot({ mode: 'md' }),
    SharedModule,
  ],
  declarations: [
    ToolExchangePage,
    ContractTypeMapPipe,
    BonusComputePipe,
    RoundPipe,
  ],
  providers: [ContractTypeMapPipe, BonusComputePipe, RoundPipe],
})
export class ToolExchangePageModule {}
