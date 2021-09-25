import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Family } from '../../../../models/families';
import { MatarazzoService } from '../../../../service/matarazzo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-add-family',
  templateUrl: './modal-add-family.component.html',
})
export class ModalAddFamilyComponent implements OnInit {
  @Output() alert = new EventEmitter();
  @Output() families = new EventEmitter();
  @Output() close = new EventEmitter();
  @Input() family = new Family();
  @Input() familiesStatus = new Family();
  @Input() edit: boolean;
  form: FormGroup;
  isLoader = false;
  isInvalid = false;
  constructor(
    private matarazzoService: MatarazzoService,
    private toastr: ToastrService,
  ) { }
  ngOnInit() {
 
  }
  onClose() {
    this.close.emit()
  }
  isFilled() {
    const isFilled = this.family.name;
    if(isFilled) {
      return true; 
    }
  }
  editForm() {
    if (this.isFilled()) {
      this.isLoader = true;
      
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
    debugger
    if (this.isFilled()) {
      this.isLoader = true;
      
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
