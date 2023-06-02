import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UneteYasePageRoutingModule } from './unete-yase-routing.module';

import { UneteYasePage } from './unete-yase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UneteYasePageRoutingModule
  ],
  declarations: [UneteYasePage]
})
export class UneteYasePageModule {}
