import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTimePage } from './search-time.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTimePageRoutingModule {}
