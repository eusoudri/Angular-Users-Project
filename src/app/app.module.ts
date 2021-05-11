import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './modules/customers/views/nav/nav.component';
import { HeaderComponent } from './modules/customers/views/header/header.component';
import { ContainerLoginComponent } from './modules/administrator/container-login/container-login.component';
import { LoginComponent } from './modules/administrator/login/login.component';
import { FamiliesComponent } from './modules/customers/views/families/families.component';
import { FamilyMemberListComponent } from './modules/customers/views/family-member-list/family-member-list.component';
import { ModalAddFamilyComponent } from './modules/customers/views/modals/modal-add-family/modal-add-family.component';
import { ModalAddFamilyMemberComponent } from './modules/customers/views/modals/modal-add-family-member/modal-add-family-member.component';
import { ModalAddFamilyMemberRequiredComponent } from './modules/customers/views/modals/modal-add-family-member-required/modal-add-family-member-required.component';
import { ModalAddFamilyMemberExtraComponent } from './modules/customers/views/modals/modal-add-family-member-extra/modal-add-family-member-extra.component';
import { ModalAddFamilyMemberAttachmentComponent } from './modules/customers/views/modals/modal-add-family-member-attachment/modal-add-family-member-attachment.component';
import { PaginationComponent } from './modules/customers/views/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ContainerLoginComponent,
    LoginComponent,
    FamiliesComponent,
    FamilyMemberListComponent,
    ModalAddFamilyComponent,
    ModalAddFamilyMemberComponent,
    ModalAddFamilyMemberRequiredComponent,
    ModalAddFamilyMemberExtraComponent,
    ModalAddFamilyMemberAttachmentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
