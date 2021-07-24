import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolExchangePage } from './tool-exchange.page';

const routes: Routes = [
  {
    path: '',
    component: ToolExchangePage,
  },
  {
    path: 'team/:teamId/player/:playerId/:id',
    loadChildren: () =>
      import('../player/player.module').then((m) => m.PlayerPageModule),
  },
  {
    path: 'team/:teamId/:id',
    loadChildren: () =>
      import('../team/team.module').then((m) => m.TeamPageModule),
  },
  {
    path: '/select-teams',
    loadChildren: () =>
      import('../select-teams/select-teams.module').then(
        (m) => m.SelectTeamsPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../../home/home.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolExchangePageRoutingModule {}
