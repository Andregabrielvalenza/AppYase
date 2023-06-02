import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroDetallePage } from './micro-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MicroDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroDetallePageRoutingModule {}
