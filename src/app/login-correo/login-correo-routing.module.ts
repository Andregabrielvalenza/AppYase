import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCorreoPage } from './login-correo.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCorreoPageRoutingModule {}
