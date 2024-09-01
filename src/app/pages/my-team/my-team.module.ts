import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTeamRoutingModule } from './my-team-routing.module';
import { MyTeamComponent } from './my-team.component';


@NgModule({
  declarations: [
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    MyTeamRoutingModule
  ],
  exports: [
    MyTeamComponent
  ]
})
export class MyTeamModule { }
