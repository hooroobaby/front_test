import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLocPageRoutingModule } from './search-loc-routing.module';

import { SearchLocPage } from './search-loc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchLocPageRoutingModule,
  ],
  declarations: [SearchLocPage]
})
export class SearchLocPageModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'search-loc.page.html',
  styleUrls: ['./search-loc.page.scss'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
