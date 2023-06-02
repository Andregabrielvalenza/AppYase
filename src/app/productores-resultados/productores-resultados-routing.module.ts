import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoresResultadosPage } from './productores-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoresResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoresResultadosPageRoutingModule {}
