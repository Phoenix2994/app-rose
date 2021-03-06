import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((m) => m.PlayerPageModule),
  },
  {
    path: 'renewal',
    loadChildren: () =>
      import('./pages/renewal/renewal.module').then((m) => m.RenewalPageModule),
  },
  {
    path: 'team-list',
    loadChildren: () =>
      import('./pages/team-list/team-list.module').then(
        (m) => m.TeamListPageModule
      ),
  },
  {
    path: 'rule-book',
    loadChildren: () =>
      import('./pages/rule-book/rule-book.module').then(
        (m) => m.RuleBookPageModule
      ),
  },/*
  {
    path: 'tool-values',
    loadChildren: () =>
      import('./pages/tool-values/tool-values.module').then(
        (m) => m.ToolValuesPageModule
      ),
  },*/
  {
    path: 'tool-exchange',
    loadChildren: () =>
      import('./pages/tool-ex/tool-exchange/tool-exchange.module').then(
        (m) => m.ToolExchangePageModule
      ),
  },
  {
    path: 'select-teams',
    loadChildren: () =>
      import('./pages/tool-ex/select-teams/select-teams.module').then(
        (m) => m.SelectTeamsPageModule
      ),
  },
  {
    path: 'awards',
    loadChildren: () => import('./pages/awards/awards.module').then( m => m.AwardsPageModule)
  },
  {
    path: 'free',
    loadChildren: () =>
      import('./pages/free/free.module').then((m) => m.FreePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
