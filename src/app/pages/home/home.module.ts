import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PaginationModule } from '../../components/pagination/pagination.module';
import { SearchComponent } from 'src/app/components/search/search.component';
import { SearchModule } from 'src/app/components/search/search.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule,
    PaginationModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
