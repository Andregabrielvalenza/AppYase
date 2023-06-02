import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaComidasBebidasPageRoutingModule } from './busqueda-comidas-bebidas-routing.module';

import { BusquedaComidasBebidasPage } from './busqueda-comidas-bebidas.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaComidasBebidasPageRoutingModule
  ],
  declarations: [BusquedaComidasBebidasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BusquedaComidasBebidasPageModule {}
