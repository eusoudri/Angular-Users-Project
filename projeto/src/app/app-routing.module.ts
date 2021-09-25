import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerTreeComponent } from './modules/family-tree/container-tree/container-tree.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/administrator/administrator.module').then(
        (m) => m.AdministratorModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/views/views.module').then(
        (m) => m.ViewsModule
      ),
  },
  {
    path: 'family-tree/:id',
    component: ContainerTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
