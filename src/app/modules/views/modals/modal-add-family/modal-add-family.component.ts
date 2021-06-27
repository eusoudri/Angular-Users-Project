import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Family } from '../../../../models/families';
import { MatarazzoService } from '../../../../service/matarazzo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-family',
  templateUrl: './modal-add-family.component.html',
})
export class ModalAddFamilyComponent implements OnInit {

  @Output() alert = new EventEmitter();
  @Output() families = new EventEmitter();
  @Output() close = new EventEmitter();
  @Input() family = new Family();
  @Input() edit: boolean;
  familyStatus: boolean = false;
  form: FormGroup;
  private router: Router;

  constructor(
    private matarazzoService: MatarazzoService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  isLoader = false;
  isInvalid = false;

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.family.id || ''],
      name: [this.family.name  || ''], //[Validators.required, Validators.minLength(3)]
      isActive: [this.family.isActive || true]
    });
  }
  onClose() {
    this.close.emit()
  }
  isFilled() {
    const isFilled = this.form.value.name;
    if(isFilled) {
      return true; 
    }
  }
  editForm() {
    if (this.isFilled()) {
      this.isLoader = true;
      this.family.id = this.form.value.id;
      this.family.name = this.form.value.name;
      this.family.isActive = this.form.value.isActive;
      
      this.matarazzoService.putFamily(this.family).subscribe(      
        success => {
          this.matarazzoService.getFamily()
          .subscribe(
            res => {
              this.isLoader = false;
              this.families.emit(res)
              this.family = new Family();
              this.toastr.success('Família editada com sucesso!');
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
      )
    } else {
        this.isInvalid = true;
      }
  }

  submitForm() {
    if (this.isFilled()) {
      this.isLoader = true;
      this.family.id = null;
      this.family.name = this.form.value.name;
      this.family.isActive = this.form.value.isActive;
      
      this.matarazzoService.postFamily(this.family).subscribe(      
        success => {
          this.matarazzoService.getFamily()
          .subscribe(
            res => {
              this.isLoader = false;
              this.families.emit(res)
              this.family = new Family();
              this.toastr.success('Família adicionada com sucesso!');
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
      )
    } else {
        this.isInvalid = true;
      }
  }
}
