import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraciasReservaPage } from './gracias-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: GraciasReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraciasReservaPageRoutingModule {}
