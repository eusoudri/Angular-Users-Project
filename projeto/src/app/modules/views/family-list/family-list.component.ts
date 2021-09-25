import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Family } from '../../../models/families';
import { StatusGeneric } from '../../../models/status-generic';
import { MatarazzoService } from '../../../service/matarazzo.service';
@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
})
export class FamilyListComponent implements OnInit {
  totalItems = 64;
  currentPage = 4;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
  addFamilyStatus= false;
  public bsModalRef: BsModalRef;
  public families: Family[];
  public familiesBase: Family[];
  public familiesStatus: StatusGeneric[];
  public query:string;
  isLoader = false;
  constructor( 
    private matarazzoService: MatarazzoService, 
    private modalService: BsModalService
  ) { }
    
  ngOnInit() {
    this.getFamiliesList();
    this.getFamiliesStatus()
  }
  onSearch(query){
    this.families= this.familiesBase.filter(x => x.name.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase()));
  }
  updateAlert(alert){
    this.addFamilyStatus = alert;
  }
  openModal(modalFamily: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalFamily, {class: 'matarazzo-theme', backdrop: 'static'});
  }
  closeModal(){
    this.bsModalRef.hide();
  }
  deleteModal(modalDelete: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalDelete, {class: 'matarazzo-theme', backdrop: 'static'});
  }
  editFamily(modalEdit: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(modalEdit, {class: 'matarazzo-theme', backdrop: 'static'});
  }
  updateFamilies(families) {
    this.familiesBase = families;
    this.families = families;
    this.closeModal();
  }

  deleteFamily(id: string){
    this.matarazzoService.deleteFamily(id)
    .subscribe(res =>{
      this.getFamiliesList();
      this.bsModalRef.hide();
    })
  }

  getFamiliesList(){
    this.isLoader = true;
    this.matarazzoService.getFamily()
      .subscribe(
        families => {
          this.families = families.data;
          this.familiesBase = families.data;
          this.isLoader = false;
        },
        error => console.log(error)
      )
  }
  getFamiliesStatus() {
    this.matarazzoService.getFamiliesStatus()
      .subscribe(
        familiesStatus => {
          this.familiesStatus = familiesStatus;
        },
        error => console.log(error)
      )
  }
}
