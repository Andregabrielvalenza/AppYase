import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntencionClientePage } from './antencion-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AntencionClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntencionClientePageRoutingModule {}
