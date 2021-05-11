import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliesComponent } from './modules/customers/views/families/families.component';
import { FamilyMemberListComponent } from './modules/customers/views/family-member-list/family-member-list.component';

const routes: Routes = [
  { path: '', component: FamiliesComponent },
  { path: 'family-member-list', component: FamilyMemberListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
