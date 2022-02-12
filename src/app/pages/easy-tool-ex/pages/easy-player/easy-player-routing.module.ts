import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyPlayerPage } from './easy-player.page';

const routes: Routes = [
  {
    path: '',
    component: EasyPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyPlayerPageRoutingModule {}
