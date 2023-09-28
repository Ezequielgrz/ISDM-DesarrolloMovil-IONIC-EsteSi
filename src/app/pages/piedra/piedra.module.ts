import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiedraPageRoutingModule } from './piedra-routing.module';

import { PiedraPage } from './piedra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiedraPageRoutingModule
  ],
  declarations: [PiedraPage]
})
export class PiedraPageModule {}
