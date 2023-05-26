import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegitroUbicacionPageRoutingModule } from './regitro-ubicacion-routing.module';

import { RegitroUbicacionPage } from './regitro-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegitroUbicacionPageRoutingModule
  ],
  declarations: [RegitroUbicacionPage]
})
export class RegitroUbicacionPageModule {}
