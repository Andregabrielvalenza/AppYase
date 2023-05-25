import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCorreoPageRoutingModule } from './login-correo-routing.module';

import { LoginCorreoPage } from './login-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCorreoPageRoutingModule
  ],
  declarations: [LoginCorreoPage]
})
export class LoginCorreoPageModule {}
