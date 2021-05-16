import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyListComponent } from '../family-list/family-list.component';
import { FamilyMemberListComponent } from '../family-member-list/family-member-list.component';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss']
})
export class FamiliesComponent implements OnInit {

  public teste: string = 'teste 1';
  constructor(router: Router) {
   
  }

  ngOnInit(): void {
  }



}

