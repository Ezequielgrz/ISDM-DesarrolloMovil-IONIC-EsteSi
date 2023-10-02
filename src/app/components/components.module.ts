import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent,MenuComponent,FooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent,MenuComponent,FooterComponent]
})
export class ComponentsModule { }
