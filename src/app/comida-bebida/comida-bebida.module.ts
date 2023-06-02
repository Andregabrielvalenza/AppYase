import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaBebidaPageRoutingModule } from './comida-bebida-routing.module';

import { ComidaBebidaPage } from './comida-bebida.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaBebidaPageRoutingModule
  ],
  declarations: [ComidaBebidaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComidaBebidaPageModule {}
