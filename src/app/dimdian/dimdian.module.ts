import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DimdianPageRoutingModule } from './dimdian-routing.module';

import { DimdianPage } from './dimdian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DimdianPageRoutingModule
  ],
  declarations: [DimdianPage]
})
export class DimdianPageModule {}
