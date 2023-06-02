import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UneteYasePage } from './unete-yase.page';

const routes: Routes = [
  {
    path: '',
    component: UneteYasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UneteYasePageRoutingModule {}
