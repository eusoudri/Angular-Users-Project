import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Person } from '../../../../models/person';
import { MatarazzoService } from '../../../../service/matarazzo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-add-family-member',
  templateUrl: './modal-add-family-member.component.html',
})
export class ModalAddFamilyMemberComponent implements OnInit {
  @Input() person = new Person();
  @Input() familyId;
  @Input() edit: boolean;
  @Output() people = new EventEmitter();
  @Output() alert = new EventEmitter();
  @Output() close = new EventEmitter();
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
  currentDate = new Date();

  ngOnInit() {
    this.genderOp = this.matarazzoService.getGender();
    this.form = this.formBuilder.group({
      firstName: [null], //[Validators.required, Validators.minLength(3)]
      lastName: [null],
      gender: ['M'],
      birthDate: [null],
      birthPlace: [null],
     marriageDate: [null],
     marriagePlace: [null],
      deathDate: [null],
      deathPlace: [null],
      maritalStatus: [null],
      kinships: ['Grau de Parentesco'],
      kin: ['Parente'],
      applicant: [false],
      note: [null],
      familyId: this.familyId
    });

    if(this.edit) {
      this.form = this.formBuilder.group({
        firstName: [this.person.firstName], //[Validators.required, Validators.minLength(3)]
        lastName: [this.person.lastName],
        gender: [this.person.gender],
        birthDate: [this.person.birthDate],
        birthPlace: [this.person.birthPlace],
       marriageDate: [this.person.marriageDate],
       marriagePlace: [this.person.marriagePlace],
        deathDate: [this.person.deathDate],
        deathPlace: [this.person.deathPlace],
        maritalStatus: [this.person.maritalStatus],
        kinships: [this.person.kinships],
        kin: [this.person.kinships],
        applicant: [this.person.applicant],
        note: [this.person.note],
        familyId: this.familyId
      });
    }
  }
  onClose() {
    this.close.emit()
  }
  isFilled() {
    const isFilled =  this.form.value.firstName;

    if(isFilled) {
      return true; 
    }
  }
  editForm() {
    if (this.isFilled()) {
      this.isLoader = true;
      this.person.firstName = this.form.value.firstName;
      this.person.lastName = this.form.value.lastName;
      this.person.gender = this.form.value.gender;
      this.person.birthDate = this.form.value.birthDate;
      this.person.birthPlace = this.form.value.birthPlace;
      this.person.marriageDate = this.form.value.marriageDate;
      this.person.marriagePlace = this.form.value.marriagePlace;
      this.person.deathDate = this.form.value.deathDate;
      this.person.deathPlace = this.form.value.deathPlace;
      this.person.maritalStatus = this.form.value.maritalStatus;
      this.person.kinships = this.form.value.kinships;
      this.person.kin = this.form.value.kin;
      this.person.applicant = this.form.value.applicant;
      this.person.note = this.form.value.note;
      
      this.matarazzoService.putPerson(this.form.value).subscribe(      
        success => {
          this.matarazzoService.getPersonByFamilyId(this.familyId)
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

  formatDate(date) {
    if(date) {
      return moment(date.substring(4,8) +'-'+  
      date.substring(2,4) +'-'+ 
      date.substring(0,2)).format();
    }
  }
  submitForm() {
    if (this.isFilled()) {
      this.isLoader = true;
      this.form.value.birthDate = this.formatDate(this.form.value.birthDate);
      this.form.value.marriageDate = this.formatDate(this.form.value.marriageDate);
      this.form.value.deathDate = this.formatDate(this.form.value.deathDate);
      this.matarazzoService.postPerson(this.form.value).subscribe(      
        success => {
          this.matarazzoService.getPersonByFamilyId(this.familyId)
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
