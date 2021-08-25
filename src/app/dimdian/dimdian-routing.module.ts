import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DimdianPage } from './dimdian.page';

const routes: Routes = [
  {
    path: '',
    component: DimdianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DimdianPageRoutingModule {}