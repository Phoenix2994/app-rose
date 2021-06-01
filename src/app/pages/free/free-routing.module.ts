import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPage } from '../player/player.page';

import { FreePage } from './free.page';

const routes: Routes = [
  {
    path: '',
    component: FreePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreePageRoutingModule {}
