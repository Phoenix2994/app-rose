import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyToolPage } from './easy-tool.page';

const routes: Routes = [
  {
    path: '',
    component: EasyToolPage,
  },
  {
    path: 'easy-summary',
    loadChildren: () =>
      import('../easy-summary/easy-summary.module').then(
        (m) => m.EasySummaryPageModule
      ),
  },
  {
    path: 'team/:teamId/:id',
    loadChildren: () =>
      import('../easy-team/easy-team.module').then((m) => m.EasyTeamPageModule),
  },
  {
    path: 'team/:teamId/player/:playerId/:id',
    loadChildren: () =>
      import('../easy-player/easy-player.module').then(
        (m) => m.EasyPlayerPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyToolPageRoutingModule {}
