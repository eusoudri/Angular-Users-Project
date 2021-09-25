import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../../models/member';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MatarazzoService } from '../../../service/matarazzo.service';
import { Router } from '@angular/router';
import { FileStatus } from '../../../models/file-status';
import { fileType } from '../../../models/file';
import { Family } from '../../../models/families';
@Component({
  selector: 'app-family-member-list',
  templateUrl: './family-member-list.component.html',
})
export class FamilyMemberListComponent implements OnInit {
  addMemberStatus= false;
  public id: string;
  public ancestor: any;
  public family: Family;
  public families: Family[];
  public members: Member[]
  public membersBase: Member[];
  public filesStatus: FileStatus[];
  public query:string;
  isLoader = false;
  public bsModalRef: BsModalRef;
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private matarazzoService: MatarazzoService, 
    private modalService: BsModalService,
    private toastr: ToastrService,
    // private localeService: BsLocaleService
  ) {
    // localeService.use('pt-br');
   }
  ngOnInit() {
    this.route.params.subscribe(p => 
      {
        this.id = p['id'];
      });
    this.getFamily(this.id)
    this.getMemberList();
    this.buildFileStatus();
  }

  buildFileStatus() {
    this.filesStatus = new Array <FileStatus>();
    this.filesStatus.push(new FileStatus("Nascimento", fileType.CertidaoNascimento, false));
    this.filesStatus.push(new FileStatus("Casamento", fileType.CertidaoCasamento, false));
    this.filesStatus.push(new FileStatus("Óbito", fileType.CertidaoObito, false));
  
  }

  checkListDocs(member: Member, fileStatus: FileStatus) {
    return member.files.some(x => x.type == fileStatus.fileType)
  }
  onSearch(query){
    this.members = this.membersBase.filter(x => x.firstName.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase()));
  }
  updateAlert(alert){
    this.addMemberStatus = alert;
  }
  openModal(modalMember: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalMember, {class: 'matarazzo-theme modal-lg', backdrop: 'static'});
  }
  closeModal(){
    this.bsModalRef.hide();
  }
  deleteModal(modalDelete: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(modalDelete, {class: 'matarazzo-theme', backdrop: 'static'});
  }
  updateMembers(members) {
    this.members = members;
    this.membersBase = members;
    this.closeModal();
  }
  deleteMember(id: string){
    this.matarazzoService.deleteMember(id)
    .subscribe(
      res =>{
        this.getMemberList();
        this.bsModalRef.hide();
      },
      error => {
        this.isLoader = false;
        this.toastr.error(error.error);
      })
  }
  editMember(modalEdit: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(modalEdit, {class: 'matarazzo-theme', backdrop: 'static'});
  }
  getMemberList(){
    this.isLoader = true;
    
    this.matarazzoService.getMemberByFamilyId(this.id)
      .subscribe(
        members => {
          this.members = members;
          this.ancestor = members.find(x => x.ancestor);
          this.membersBase = members;
          this.isLoader = false;
        },
        error => {
          this.isLoader = false;
          this.toastr.error('Erro! Tente novamente');
        }
      )
  }

  getFamily(id){
    debugger
    this.matarazzoService.getFamilyById(id)
      .subscribe(
        family => {
          this.family = family;
        },
        error => console.log(error)
      )
  }
}
