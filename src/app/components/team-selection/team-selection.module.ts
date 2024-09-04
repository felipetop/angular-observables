import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSelectionComponent } from './team-selection.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TeamSelectionComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [TeamSelectionComponent]
})
export class TeamSelectionModule { }
