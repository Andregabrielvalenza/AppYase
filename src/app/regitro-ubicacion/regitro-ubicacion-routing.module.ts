import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegitroUbicacionPage } from './regitro-ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: RegitroUbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegitroUbicacionPageRoutingModule {}
