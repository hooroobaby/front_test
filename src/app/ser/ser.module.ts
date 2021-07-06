import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerPageRoutingModule } from './ser-routing.module';

import { SerPage } from './ser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerPageRoutingModule
  ],
  declarations: [SerPage]
})
export class SerPageModule {}
