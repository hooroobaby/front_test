import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerPage } from './ser.page';

const routes: Routes = [
  {
    path: '',
    component: SerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerPageRoutingModule {}
