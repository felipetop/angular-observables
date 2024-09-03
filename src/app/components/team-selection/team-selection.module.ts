import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSelectionComponent } from './team-selection.component';



@NgModule({
  declarations: [TeamSelectionComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamSelectionComponent]
})
export class TeamSelectionModule { }
