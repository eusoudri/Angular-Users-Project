import { Component, OnInit } from '@angular/core';
import { Family } from '../../../../models/families';
import { MatarazzoService } from '../../../../service/matarazzo.service';

@Component({
  selector: 'app-modal-add-family',
  templateUrl: './modal-add-family.component.html',
  styleUrls: ['./modal-add-family.component.scss']
})
export class ModalAddFamilyComponent implements OnInit {
  family: Family = new Family();

  constructor(private matarazzoService: MatarazzoService) { }

  ngOnInit() {

  }
  submitForm() {
   
    this.matarazzoService.postFamily(this.family).subscribe();
  }


}
