import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizarronPageRoutingModule } from './pizarron-routing.module';

import { PizarronPage } from './pizarron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizarronPageRoutingModule
  ],
  declarations: [PizarronPage]
})
export class PizarronPageModule {}
