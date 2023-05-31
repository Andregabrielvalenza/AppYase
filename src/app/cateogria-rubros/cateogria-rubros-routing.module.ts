import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateogriaRubrosPage } from './cateogria-rubros.page';

const routes: Routes = [
  {
    path: '',
    component: CateogriaRubrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateogriaRubrosPageRoutingModule {}
