import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicroProductoresPageRoutingModule } from './micro-productores-routing.module';

import { MicroProductoresPage } from './micro-productores.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicroProductoresPageRoutingModule
  ],
  declarations: [MicroProductoresPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MicroProductoresPageModule {}
