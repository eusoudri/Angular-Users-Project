import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../models/person';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatarazzoService } from '../../../service/matarazzo.service';

@Component({
  selector: 'app-family-member-list',
  templateUrl: './family-member-list.component.html',
})
export class FamilyMemberListComponent implements OnInit {
  public id: string;
  addPersonStatus= false;
  public bsModalRef: BsModalRef;
  constructor(private route: ActivatedRoute, private matarazzoService: MatarazzoService, private modalService: BsModalService) { }

  public people: Person[]
  isLoader = false;

  ngOnInit() {
    this.getMemberList();
  }
  openModal(modalMember: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalMember, {class: 'matarazzo-theme modal-lg'});
  }
  closeModal(){
    this.bsModalRef.hide();
  }
  deleteModal(modalDelete: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalDelete, {class: 'matarazzo-theme'});
  }
  updateAlert(alert){
    this.addPersonStatus = alert;
  }
  updatePeople(people) {
    this.people = people;
    this.closeModal();
  }
  deletePerson(id: string){
    this.matarazzoService.deletePerson(id)
    .subscribe(res =>{
      this.getMemberList();
      this.bsModalRef.hide();
    })
  }
  editPerson(modalEdit: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(modalEdit, {class: 'matarazzo-theme'});
  }
  getMemberList(){
    this.isLoader = true;
    this.route.params.subscribe(p => 
      {
        this.id = p['id'];
      });
    this.matarazzoService.getPersonByFamilyId(this.id)
      .subscribe(
        people => {
          this.people = people;
          this.isLoader = false;
        },
        error => console.log(error)
      )
  }
}
