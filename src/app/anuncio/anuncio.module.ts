import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnuncioPageRoutingModule } from './anuncio-routing.module';

import { AnuncioPage } from './anuncio.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioPageRoutingModule
  ],
  declarations: [AnuncioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnuncioPageModule {}
