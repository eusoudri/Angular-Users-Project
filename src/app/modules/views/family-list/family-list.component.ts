import { Component, OnInit } from '@angular/core';
import { Family } from '../../../models/families';
import { MatarazzoService } from '../../../service/matarazzo.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  constructor(private matarazzoService: MatarazzoService) { }

  public families: Family[]

  ngOnInit() {
    this.matarazzoService.getFamily()
      .subscribe(
        families => {
          this.families = families;
        },
        error => console.log(error)
      )
  }

  deleteFamily(id: string){
    this.matarazzoService.deleteFamily(id)
    .subscribe()

    
  }

}
