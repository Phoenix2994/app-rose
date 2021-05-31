import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'balance',
        loadChildren: () =>
          import('../balance/balance.module').then((m) => m.BalancePageModule),
      },
      {
        path: 'team',
        loadChildren: () =>
          import('../team/team.module').then((m) => m.TeamPageModule),
      },
      {
        path: 'youth',
        loadChildren: () =>
          import('../youth/youth.module').then((m) => m.YouthPageModule),
      },
      {
        path: 'player',
        loadChildren: () =>
          import('../player/player.module').then((m) => m.PlayerPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/balance',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/balance',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
