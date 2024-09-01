import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from './header.component';
import { AppModule } from 'src/app/app.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
