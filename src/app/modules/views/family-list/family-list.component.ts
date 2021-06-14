import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Family } from '../../../models/families';
import { MatarazzoService } from '../../../service/matarazzo.service';
import { ModalAddFamilyComponent } from '../modals/modal-add-family/modal-add-family.component';

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

  openModal(template: TemplateRef<any>) {
    
    this.bsModalRef = this.modalService.show(template, {class: 'matarazzo-theme'});
  }

  updateFamilies(families) {
    this.families = families;
    this.closeModal();
  }
  
  closeModal(){
    this.bsModalRef.hide();
  }

  updateAlert(alert){
    this.addFamilyStatus = alert;
  }

  deleteFamily(id: string){
    this.matarazzoService.deleteFamily(id)
    .subscribe(res =>{
      this.getFamiliesList();

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
