import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DimdianPageRoutingModule } from './dimdian-routing.module';

import { DimdianPage } from './dimdian.page';

import {ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DimdianPageRoutingModule,
    ChartsModule
  ],
  declarations: [DimdianPage]
})
export class DimdianPageModule {}
