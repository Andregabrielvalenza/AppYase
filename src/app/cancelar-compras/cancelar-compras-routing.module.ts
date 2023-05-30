import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelarComprasPage } from './cancelar-compras.page';

const routes: Routes = [
  {
    path: '',
    component: CancelarComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelarComprasPageRoutingModule {}
