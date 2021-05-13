import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliesComponent } from './families/families.component';
import { FamilyListComponent } from './family-list/family-list.component';

const routes: Routes = [
  { path: '', component: FamiliesComponent, children: [
  {
    path: 'family-list',
    component: FamilyListComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ViewsRoutingModule {}


