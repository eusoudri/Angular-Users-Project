import { Component, OnInit, TemplateRef, Input, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Family } from '../../../models/families';
import { MatarazzoService } from '../../../service/matarazzo.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
})
export class FamilyListComponent implements OnInit {
  addFamilyStatus= false;
  public bsModalRef: BsModalRef;
  constructor(private matarazzoService: MatarazzoService, private modalService: BsModalService) { }

  public families: Family[]

  ngOnInit() {
    this.getFamiliesList();
  }

  openModal(modalFamily: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalFamily, {class: 'matarazzo-theme'});
  }
  closeModal(){
    debugger
    this.bsModalRef.hide();
  }

  deleteModal(modalDelete: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalDelete, {class: 'matarazzo-theme'});
  }
  updateFamilies(families) {
    this.families = families;
    this.closeModal();
  }

  updateAlert(alert){
    this.addFamilyStatus = alert;
  }

  deleteFamily(id: string){
    this.matarazzoService.deleteFamily(id)
    .subscribe(res =>{
      this.getFamiliesList();
      this.bsModalRef.hide();
    })
  }

  getFamiliesList(){
    this.matarazzoService.getFamily()
      .subscribe(
        families => {
          this.families = families;
        },
        error => console.log(error)
      )
  }
}
