import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaBebidaPage } from './comida-bebida.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaBebidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaBebidaPageRoutingModule {}
