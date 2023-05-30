import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoBusquedaPageRoutingModule } from './resultado-busqueda-routing.module';

import { ResultadoBusquedaPage } from './resultado-busqueda.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoBusquedaPageRoutingModule
  ],
  declarations: [ResultadoBusquedaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResultadoBusquedaPageModule {}
