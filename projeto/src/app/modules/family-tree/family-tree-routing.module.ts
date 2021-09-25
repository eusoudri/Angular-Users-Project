import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerTreeComponent } from './container-tree/container-tree.component';

const routes: Routes = [{ path: 'family-tree', component: ContainerTreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyTreeRoutingModule {}

