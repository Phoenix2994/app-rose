import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPage } from '../player/player.page';

import { TeamPage } from './team.page';

const routes: Routes = [
  {
    path: '',
    component: TeamPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamPageRoutingModule {}
