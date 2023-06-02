import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicroDetallePageRoutingModule } from './micro-detalle-routing.module';

import { MicroDetallePage } from './micro-detalle.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicroDetallePageRoutingModule
  ],
  declarations: [MicroDetallePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MicroDetallePageModule {}
