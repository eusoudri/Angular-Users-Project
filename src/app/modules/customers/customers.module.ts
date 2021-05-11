import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliesComponent } from './views/families/families.component';
import { FamilyMemberListComponent } from './views/family-member-list/family-member-list.component';
import { NavComponent } from './views/nav/nav.component';
import { HeaderComponent } from './views/header/header.component';
import { ModalAddFamilyComponent } from './views/modals/modal-add-family/modal-add-family.component';
import { ModalAddFamilyMemberComponent } from './views/modals/modal-add-family-member/modal-add-family-member.component';
import { ModalAddFamilyMemberRequiredComponent } from './views/modals/modal-add-family-member-required/modal-add-family-member-required.component';
import { ModalAddFamilyMemberExtraComponent } from './views/modals/modal-add-family-member-extra/modal-add-family-member-extra.component';
import { ModalAddFamilyMemberAttachmentComponent } from './views/modals/modal-add-family-member-attachment/modal-add-family-member-attachment.component';
import { PaginationComponent } from './views/pagination/pagination.component';
import { FamilyTreeComponent } from './views/family-tree/family-tree.component';



@NgModule({
  declarations: [
    FamiliesComponent,
    FamilyMemberListComponent,
    NavComponent,
    HeaderComponent,
    ModalAddFamilyComponent,
    ModalAddFamilyMemberComponent,
    ModalAddFamilyMemberRequiredComponent,
    ModalAddFamilyMemberExtraComponent,
    ModalAddFamilyMemberAttachmentComponent,
    PaginationComponent,
    FamilyTreeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
