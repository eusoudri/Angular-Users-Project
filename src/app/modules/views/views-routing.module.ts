import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerMainComponent } from './container-main/container-main.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyMemberListComponent } from './family-member-list/family-member-list.component';

const routes: Routes = [
  { path: '', component: ContainerMainComponent, children: [
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


