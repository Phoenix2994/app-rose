import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasySummaryPageRoutingModule } from './easy-summary-routing.module';

import { EasySummaryPage } from './easy-summary.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ContractTypeMapPipe } from 'src/app/pages/tool-ex/pipes/contract-type-map.pipe';
import { BonusComputePipe } from 'src/app/pages/tool-ex/pipes/bonus-compute.pipe';
import { RoundPipe } from 'src/app/pages/tool-ex/pipes/round.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamSummaryComponent } from './components/team-summary/team-summary.component';

const MAT_MODULES = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
  MatTableModule,
];

@NgModule({
  imports: [
    ...MAT_MODULES,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EasySummaryPageRoutingModule,
  ],
  declarations: [
    TeamSummaryComponent,
    EasySummaryPage,
    ContractTypeMapPipe,
    BonusComputePipe,
    RoundPipe,
  ],
  providers: [ContractTypeMapPipe, BonusComputePipe, RoundPipe],
})
export class EasySummaryPageModule {}
