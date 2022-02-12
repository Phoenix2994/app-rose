import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyToolPageRoutingModule } from './easy-tool-routing.module';

import { EasyToolPage } from './easy-tool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyToolPageRoutingModule
  ],
  declarations: [EasyToolPage]
})
export class EasyToolPageModule {}
