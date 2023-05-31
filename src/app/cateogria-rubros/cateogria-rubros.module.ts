import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateogriaRubrosPageRoutingModule } from './cateogria-rubros-routing.module';

import { CateogriaRubrosPage } from './cateogria-rubros.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateogriaRubrosPageRoutingModule
  ],
  declarations: [CateogriaRubrosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CateogriaRubrosPageModule {}
