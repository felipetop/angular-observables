import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [CharacterCardComponent]
})
export class CharacterCardModule { }
