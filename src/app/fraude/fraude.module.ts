import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FraudePageRoutingModule } from './fraude-routing.module';

import { FraudePage } from './fraude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FraudePageRoutingModule
  ],
  declarations: [FraudePage]
})
export class FraudePageModule {}
