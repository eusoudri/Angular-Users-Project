import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Person } from '../../../../models/person';
import { MatarazzoService } from '../../../../service/matarazzo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-family-member',
  templateUrl: './modal-add-family-member.component.html',
})
export class ModalAddFamilyMemberComponent implements OnInit {
  @Output() alert = new EventEmitter();
  @Output() people = new EventEmitter();
  @Output() close = new EventEmitter();
  
  @Input() familyId;
  person: Person = new Person();
  genderOp: any[];
  form: FormGroup;
  private router: Router;
  constructor(
    private matarazzoService: MatarazzoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public bsModalRef: BsModalRef,
  ) { }
  
  isLoader = false;
  isInvalid = false;

  ngOnInit() {
    this.genderOp = this.matarazzoService.getGender();
    this.form = this.formBuilder.group({
      firstName: [null], //[Validators.required, Validators.minLength(3)]
      lastName: [null],
      gender: ['M'],
      birthDate: [null],
      birthPlace: [null],
      marriegeDate: [null],
      marriegePlace: [null],
      deathDate: [null],
      deathPlace: [null],
      maritalStatus: [null],
      kinships: [null],
      kin: [null],
      applicant: [false],
      note: [null],
      familyId: this.familyId
    });
  }
  onClose() {
    this.close.emit()
  }
  isFilled() {
    debugger
    const isFilled =  this.form.value.firstName;

    if(isFilled) {
      return true; 
    }
  }
  submitForm() {
    if (this.isFilled()) {
      this.isLoader = true;
      this.matarazzoService.postPerson(this.form.value).subscribe(      
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
