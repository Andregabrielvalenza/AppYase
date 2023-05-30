import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntencionClientePageRoutingModule } from './antencion-cliente-routing.module';

import { AntencionClientePage } from './antencion-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntencionClientePageRoutingModule
  ],
  declarations: [AntencionClientePage]
})
export class AntencionClientePageModule {}
