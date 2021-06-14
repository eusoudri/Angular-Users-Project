import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Person } from '../../../../models/person';
import { MatarazzoService } from '../../../../service/matarazzo.service';

@Component({
  selector: 'app-modal-add-family-member',
  templateUrl: './modal-add-family-member.component.html',
})
export class ModalAddFamilyMemberComponent implements OnInit {
  @Output() alert = new EventEmitter();
  @Output() people = new EventEmitter();
  personStatus: boolean = false;
  person: Person = new Person();
  private router: Router;
  constructor(
    private matarazzoService: MatarazzoService,
    private toastr: ToastrService,
    public bsModalRef: BsModalRef,
  ) { }
  
  isLoader = false;

  ngOnInit() {

  }
  onClose() {
    this.bsModalRef.hide();
  }
  submitForm() {
    this.isLoader = true;
    this.matarazzoService.postPerson(this.person).subscribe(      
      success => {
        this.matarazzoService.getPerson()
        .subscribe(
          res => {
            this.isLoader = false;
            this.people.emit(res)
            this.person = new Person();
            this.toastr.success('Membro adicionado com sucesso!');
          },
          error => {
            this.isLoader = false;
            this.toastr.error('Erro! Tente novamente');
          }
        )
      },
      errors => {
        this.isLoader = false;
        this.toastr.error('Erro! Tente novamente');
      }
    );
  }

}
