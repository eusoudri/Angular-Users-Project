import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliesComponent } from './families/families.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyMemberListComponent } from './family-member-list/family-member-list.component';

const routes: Routes = [
  { path: '', component: FamiliesComponent, children: [
  {
    path: '',
    component: FamilyListComponent
  },
  {
    path: 'family-member-list',
    component: FamilyMemberListComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ViewsRoutingModule {}


