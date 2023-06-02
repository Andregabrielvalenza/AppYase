import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaComidasBebidasPage } from './busqueda-comidas-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComidasBebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaComidasBebidasPageRoutingModule {}
