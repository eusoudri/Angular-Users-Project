import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ContainerLoginComponent } from './modules/administrator/container-login/container-login.component';
import { FamiliesComponent } from './modules/customers/views/families/families.component';
import { FamiliesMemberListComponent } from './modules/customers/views/families-member-list/families-member-list.component';

const routes: Routes = [
  // { path: 'login', component: ContainerLoginComponent },
  { path: '', component: FamiliesComponent },
  { path: 'familie-member-list', component: FamiliesMemberListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
