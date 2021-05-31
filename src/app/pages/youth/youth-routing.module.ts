import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPage } from '../player/player.page';

import { YouthPage } from './youth.page';

const routes: Routes = [
  {
    path: '',
    component: YouthPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
