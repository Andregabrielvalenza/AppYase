import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GustosInteresPageRoutingModule } from './gustos-interes-routing.module';

import { GustosInteresPage } from './gustos-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GustosInteresPageRoutingModule
  ],
  declarations: [GustosInteresPage]
})
export class GustosInteresPageModule {}
