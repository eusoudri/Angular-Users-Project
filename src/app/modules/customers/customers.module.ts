import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliesComponent } from './views/families/families.component';
import { FamiliesMemberListComponent } from './views/families-member-list/families-member-list.component';
import { NavComponent } from './views/nav/nav.component';
import { HeaderComponent } from './views/header/header.component';
import { ModalAddFamilieComponent } from './views/modals/modal-add-familie/modal-add-familie.component';
import { ModalAddFamilieMemberComponent } from './views/modals/modal-add-familie-member/modal-add-familie-member.component';
import { ModalAddFamilieMemberRequiredComponent } from './views/modals/modal-add-familie-member-required/modal-add-familie-member-required.component';
import { ModalAddFamilieMemberExtraComponent } from './views/modals/modal-add-familie-member-extra/modal-add-familie-member-extra.component';
import { ModalAddFamilieMemberAttachmentComponent } from './views/modals/modal-add-familie-member-attachment/modal-add-familie-member-attachment.component';
import { PaginationComponent } from './views/pagination/pagination.component';



@NgModule({
  declarations: [
    FamiliesComponent,
    FamiliesMemberListComponent,
    NavComponent,
    HeaderComponent,
    ModalAddFamilieComponent,
    ModalAddFamilieMemberComponent,
    ModalAddFamilieMemberRequiredComponent,
    ModalAddFamilieMemberExtraComponent,
    ModalAddFamilieMemberAttachmentComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
