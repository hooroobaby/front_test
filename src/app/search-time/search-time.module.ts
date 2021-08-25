import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTimePageRoutingModule } from './search-time-routing.module';

import { SearchTimePage } from './search-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTimePageRoutingModule
  ],
  declarations: [SearchTimePage]
})
export class SearchTimePageModule {}


import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'search-time.page.html',
  styleUrls: ['./search-time.page.scss'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
