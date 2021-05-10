import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ContainerLoginComponent } from './modules/administrator/container-login/container-login.component';
import { FamiliesComponent } from './modules/customers/views/families/families.component';
import { FamiliesMemberListComponent } from './modules/customers/views/families-member-list/families-member-list.component';
import { FamilyTreeComponent } from './modules/customers/views/family-tree/family-tree.component';

const routes: Routes = [
  // { path: 'login', component: ContainerLoginComponent },
  { path: '', component: FamiliesComponent },
  { path: 'familie-member-list', component: FamiliesMemberListComponent },
  { path: 'family-tree', component: FamilyTreeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
