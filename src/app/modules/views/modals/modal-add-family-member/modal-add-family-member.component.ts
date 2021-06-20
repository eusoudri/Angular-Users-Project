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
  genderOp: any[];
  private router: Router;
  constructor(
    private matarazzoService: MatarazzoService,
    private toastr: ToastrService,
    public bsModalRef: BsModalRef,
  ) { }
  
  isLoader = false;
  isInvalid = false;

  ngOnInit() {
    this.genderOp = this.matarazzoService.getGender();
  }
  onClose() {
    this.bsModalRef.hide();
  }
  isFilled() {
    debugger
    const isFilled = 
    this.person.name;
    this.person.lastName;
    this.person.gender;
    this.person.dateBirth;
    this.person.placeBirth;
    this.person.relative;
    this.person.kinships;
    this.person.requered;

    if(isFilled) {
      return true; 
    }
  }
  submitForm() {
    if (this.isFilled()) {
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
    } else {
      this.isInvalid = true;
    }
  }
}
