import { ViewsRoutingModule } from './views-routing.module';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from '../shared/header/header.component';
import { NavComponent } from '../shared/nav/nav.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyMemberListComponent } from './family-member-list/family-member-list.component';
import { ModalAddFamilyComponent } from './modals/modal-add-family/modal-add-family.component';
import { ModalAddFamilyMemberComponent } from './modals/modal-add-family-member/modal-add-family-member.component';
import { ModalAlertComponent } from './modals/modal-alert/modal-alert.component';
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
    ModalAlertComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    BsModalRef
  ],
  exports: [ModalAddFamilyComponent],
  entryComponents: [ModalAddFamilyComponent]

})
export class ViewsModule { }


