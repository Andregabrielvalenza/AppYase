import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FraudePage } from './fraude.page';

const routes: Routes = [
  {
    path: '',
    component: FraudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraudePageRoutingModule {}
