import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuleBookPageRoutingModule } from './rule-book-routing.module';

import { RuleBookPage } from './rule-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuleBookPageRoutingModule
  ],
  declarations: [RuleBookPage]
})
export class RuleBookPageModule {}
