import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyListComponent } from './family-list.component';

const routes: Routes = [
  { path: '', component: FamilyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FamilyListRoutingModule { }
