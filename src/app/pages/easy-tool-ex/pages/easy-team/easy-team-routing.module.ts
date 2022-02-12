import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyTeamPage } from './easy-team.page';

const routes: Routes = [
  {
    path: '',
    component: EasyTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyTeamPageRoutingModule {}
