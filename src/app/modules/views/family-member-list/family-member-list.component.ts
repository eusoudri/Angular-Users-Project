import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/person';
import { MatarazzoService } from '../../../service/matarazzo.service';

@Component({
  selector: 'app-family-member-list',
  templateUrl: './family-member-list.component.html',
})
export class FamilyMemberListComponent implements OnInit {

  addPersonStatus= false;

  constructor(private matarazzoService: MatarazzoService) { }

  public people: Person[]

  ngOnInit() {
    this.getMemberList();
  }

  updatePeople(people) {
    this.people = people;
  }

  updateAlert(alert){
    this.addPersonStatus = alert;
  }

  deletePerson(id: string){
    this.matarazzoService.deletePerson(id)
    .subscribe(res =>{
      this.getMemberList();

    })
  }

  getMemberList(){
    this.matarazzoService.getPerson()
      .subscribe(
        people => {
          this.people = people;
        },
        error => console.log(error)
      )
  }
}
