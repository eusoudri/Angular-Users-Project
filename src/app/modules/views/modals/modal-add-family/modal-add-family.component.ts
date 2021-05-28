import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Family } from '../../../../models/families';
import { MatarazzoService } from '../../../../service/matarazzo.service';

@Component({
  selector: 'app-modal-add-family',
  templateUrl: './modal-add-family.component.html',
  styleUrls: ['./modal-add-family.component.scss']
})
export class ModalAddFamilyComponent implements OnInit {

  @Output() alert = new EventEmitter();
  @Output() families = new EventEmitter();
  familyStatus: boolean = false;
  family: Family = new Family();
  private router: Router;

  constructor(
    private matarazzoService: MatarazzoService,
    private toastr: ToastrService
  ) { }

  isLoader = false;

  ngOnInit() {

  }
  submitForm() {
    this.isLoader = true;
    this.matarazzoService.postFamily(this.family).subscribe(      
      success => {
        this.matarazzoService.getFamily()
        .subscribe(
          res => {
            this.families.emit(res)
            this.family = new Family();
            this.toastr.success('Família adicionada com sucesso!');
          },
          error => {
            this.toastr.error('Erro! Tente novamente');
          }
        )
      },
      errors => {
        this.toastr.error('Erro! Tente novamente');
        this.isLoader = false;
      }
    );
  }


}
