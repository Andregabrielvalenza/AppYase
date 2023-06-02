import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraciasReservaPageRoutingModule } from './gracias-reserva-routing.module';

import { GraciasReservaPage } from './gracias-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraciasReservaPageRoutingModule
  ],
  declarations: [GraciasReservaPage]
})
export class GraciasReservaPageModule {}
