import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroProductoresPage } from './micro-productores.page';

const routes: Routes = [
  {
    path: '',
    component: MicroProductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroProductoresPageRoutingModule {}
