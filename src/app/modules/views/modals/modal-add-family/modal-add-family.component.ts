import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Family } from '../../../../models/families';
import { MatarazzoService } from '../../../../service/matarazzo.service';

@Component({
  selector: 'app-modal-add-family',
  templateUrl: './modal-add-family.component.html',
})
export class ModalAddFamilyComponent implements OnInit {

  @Output() alert = new EventEmitter();
  @Output() families = new EventEmitter();
  @Output() close = new EventEmitter();
  familyStatus: boolean = false;
  family: Family = new Family();
  private router: Router;

  constructor(
    private matarazzoService: MatarazzoService,
    private toastr: ToastrService,
  ) { }

  isLoader = false;
  isInvalid = false;

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
  submitForm() {
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
