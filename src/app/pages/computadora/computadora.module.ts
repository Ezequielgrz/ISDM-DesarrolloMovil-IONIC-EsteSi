import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputadoraPageRoutingModule } from './computadora-routing.module';

import { ComputadoraPage } from './computadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputadoraPageRoutingModule
  ],
  declarations: [ComputadoraPage]
})
export class ComputadoraPageModule {}
