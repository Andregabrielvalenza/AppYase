import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoresResultadosPageRoutingModule } from './productores-resultados-routing.module';

import { ProductoresResultadosPage } from './productores-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoresResultadosPageRoutingModule
  ],
  declarations: [ProductoresResultadosPage]
})
export class ProductoresResultadosPageModule {}
