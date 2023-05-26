import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GustosInteresPage } from './gustos-interes.page';

const routes: Routes = [
  {
    path: '',
    component: GustosInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GustosInteresPageRoutingModule {}
