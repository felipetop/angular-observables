import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PaginationModule } from '../../components/pagination/pagination.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule,
    PaginationModule
  ],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
