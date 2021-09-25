import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContainerTreeComponent } from './container-tree/container-tree.component';
import { TreeComponent } from './tree/tree.component';
import { FamilyTreeRoutingModule } from './family-tree-routing.module';

@NgModule({
  declarations: [
    ContainerTreeComponent, 
    TreeComponent
  ],
  imports: [
    CommonModule, 
    FamilyTreeRoutingModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class FamilyTreeModule { }
