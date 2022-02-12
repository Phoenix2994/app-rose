import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasySummaryPage } from './easy-summary.page';

const routes: Routes = [
  {
    path: '',
    component: EasySummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasySummaryPageRoutingModule {}
