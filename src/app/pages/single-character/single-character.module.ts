import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCharacterRoutingModule } from './single-character-routing.module';
import { SingleCharacterComponent } from './single-character.component';


@NgModule({
  declarations: [
    SingleCharacterComponent
  ],
  imports: [
    CommonModule,
    SingleCharacterRoutingModule
  ],
  exports: [
    SingleCharacterComponent
  ]
})
export class SingleCharacterModule { }
