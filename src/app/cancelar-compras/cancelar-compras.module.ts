import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelarComprasPageRoutingModule } from './cancelar-compras-routing.module';

import { CancelarComprasPage } from './cancelar-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelarComprasPageRoutingModule
  ],
  declarations: [CancelarComprasPage]
})
export class CancelarComprasPageModule {}
