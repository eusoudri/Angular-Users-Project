import { Component, OnInit } from '@angular/core';
import { Family } from '../../../models/families';
import { MatarazzoService } from '../../../service/matarazzo.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
})
export class FamilyListComponent implements OnInit {
  addFamilyStatus= false;
  constructor(private matarazzoService: MatarazzoService) { }

  public families: Family[]

  ngOnInit() {
    this.getFamiliesList();
  }

  updateFamilies(families) {
    this.families = families;
  }

  updateAlert(alert){
    this.addFamilyStatus = alert;
  }

  deleteFamily(id: string){
    this.matarazzoService.deleteFamily(id)
    .subscribe(res =>{
      this.getFamiliesList();

    })
  }

  getFamiliesList(){
    this.matarazzoService.getFamily()
      .subscribe(
        families => {
          this.families = families;
        },
        error => console.log(error)
      )
  }
}
