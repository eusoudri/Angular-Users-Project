import { ViewsRoutingModule } from './views-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from '../shared/header/header.component';
import { NavComponent } from '../shared/nav/nav.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyMemberListComponent } from './family-member-list/family-member-list.component';
import { ModalAddFamilyComponent } from './modals/modal-add-family/modal-add-family.component';
import { ModalAddFamilyMemberComponent } from './modals/modal-add-family-member/modal-add-family-member.component';
import { PaginationComponent } from './../shared/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    ContainerMainComponent,
    FamilyMemberListComponent,
    FamilyListComponent,
    ModalAddFamilyComponent,
    ModalAddFamilyMemberComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class ViewsModule { }


