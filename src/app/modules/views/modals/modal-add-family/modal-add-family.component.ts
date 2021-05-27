import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private matarazzoService: MatarazzoService) { }

  ngOnInit() {

  }
  submitForm() {

    this.matarazzoService.postFamily(this.family).subscribe(      
      success => {
        this.matarazzoService.getFamily()
        .subscribe(
          res => {
            this.families.emit(res)
            this.alert.emit(true);
            this.family = new Family();
          },
          error => console.log(error)
        )

      
      },
      errors => {
        this.alert.emit(false);
        console.log("erro")
      }
    );
  }


}
