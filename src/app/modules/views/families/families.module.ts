import { FamiliesRoutingModule } from './families-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../shared/header/header.component';
import { NavComponent } from '../../shared/nav/nav.component';
import { FamilyListComponent } from './../family-list/family-list.component';
import { FamilyMemberListComponent } from './../family-member-list/family-member-list.component';
import { ModalAddFamilyComponent } from './../modals/modal-add-family/modal-add-family.component';
import { ModalAddFamilyMemberComponent } from './../modals/modal-add-family-member/modal-add-family-member.component';
import { ModalAddFamilyMemberRequiredComponent } from './../modals/modal-add-family-member-required/modal-add-family-member-required.component';
import { ModalAddFamilyMemberExtraComponent } from './../modals/modal-add-family-member-extra/modal-add-family-member-extra.component';
import { ModalAddFamilyMemberAttachmentComponent } from './../modals/modal-add-family-member-attachment/modal-add-family-member-attachment.component';
import { PaginationComponent } from './../../shared/pagination/pagination.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FamilyMemberListComponent,
    FamilyListComponent,
    ModalAddFamilyComponent,
    ModalAddFamilyMemberComponent,
    ModalAddFamilyMemberRequiredComponent,
    ModalAddFamilyMemberExtraComponent,
    ModalAddFamilyMemberAttachmentComponent,
    PaginationComponent
  ],
  imports: [
    FamiliesRoutingModule,
    HttpClientModule, 
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
})

export class FamiliesModule {}
