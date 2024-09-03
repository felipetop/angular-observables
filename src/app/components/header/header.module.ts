import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from './header.component';
import { AppModule } from 'src/app/app.module';
import { MenuModule } from '../menu/menu.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenuModule,
    PaginationModule,
    SearchModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
