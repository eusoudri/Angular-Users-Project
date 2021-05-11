import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';

import { NavComponent } from '../shared/nav/nav.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FamiliesComponent } from './families/families.component';
import { FamilyMemberListComponent } from './family-member-list/family-member-list.component';
import { ModalAddFamilyComponent } from './modals/modal-add-family/modal-add-family.component';
import { ModalAddFamilyMemberComponent } from './modals/modal-add-family-member/modal-add-family-member.component';
import { ModalAddFamilyMemberRequiredComponent } from './modals/modal-add-family-member-required/modal-add-family-member-required.component';
import { ModalAddFamilyMemberExtraComponent } from './modals/modal-add-family-member-extra/modal-add-family-member-extra.component';
import { ModalAddFamilyMemberAttachmentComponent } from './modals/modal-add-family-member-attachment/modal-add-family-member-attachment.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';

@NgModule({
  declarations: [
    ViewsComponent,
    NavComponent,
    HeaderComponent,
    FamiliesComponent,
    FamilyMemberListComponent,
    ModalAddFamilyComponent,
    ModalAddFamilyMemberComponent,
    ModalAddFamilyMemberRequiredComponent,
    ModalAddFamilyMemberExtraComponent,
    ModalAddFamilyMemberAttachmentComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    ViewsRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ViewsComponent],
})
export class ViewsModule {}
