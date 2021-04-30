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
import { FamiliesMemberListComponent } from './modules/customers/views/families-member-list/families-member-list.component';
import { ModalAddFamilieComponent } from './modules/customers/views/modals/modal-add-familie/modal-add-familie.component';
import { ModalAddFamilieMemberComponent } from './modules/customers/views/modals/modal-add-familie-member/modal-add-familie-member.component';
import { ModalAddFamilieMemberRequiredComponent } from './modules/customers/views/modals/modal-add-familie-member-required/modal-add-familie-member-required.component';
import { ModalAddFamilieMemberExtraComponent } from './modules/customers/views/modals/modal-add-familie-member-extra/modal-add-familie-member-extra.component';
import { ModalAddFamilieMemberAttachmentComponent } from './modules/customers/views/modals/modal-add-familie-member-attachment/modal-add-familie-member-attachment.component';
import { PaginationComponent } from './modules/customers/views/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ContainerLoginComponent,
    LoginComponent,
    FamiliesComponent,
    FamiliesMemberListComponent,
    ModalAddFamilieComponent,
    ModalAddFamilieMemberComponent,
    ModalAddFamilieMemberRequiredComponent,
    ModalAddFamilieMemberExtraComponent,
    ModalAddFamilieMemberAttachmentComponent,
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
