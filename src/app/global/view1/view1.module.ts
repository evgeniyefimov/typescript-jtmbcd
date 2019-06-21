import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { View1PageRoutingModule } from './view1.router.module';

import { View1Page } from './view1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    View1PageRoutingModule
  ],
  declarations: [View1Page]
})
export class View1PageModule {}
