import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuModule } from '../menu/menu.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';
import { TeamSelectionModule } from '../team-selection/team-selection.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenuModule,
    TeamSelectionModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
