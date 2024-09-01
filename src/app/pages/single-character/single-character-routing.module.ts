import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleCharacterComponent } from './single-character.component';

const routes: Routes = [{ path: '', component: SingleCharacterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleCharacterRoutingModule { }
