import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modal-add-family-member',
  templateUrl: './modal-add-family-member.component.html',
  styleUrls: ['./modal-add-family-member.component.scss']
})
export class ModalAddFamilyMemberComponent implements OnInit {

  member: FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {

    this.member =  this.fb.group({
      name: [null],
      lastName: [null],
      gender: [null],
      dateBirth : [null],
      placeBirth: [null],
      dateMarriege: [null],
      placeMarriege: [null],
      dateDeath: [null],
      placeDeath: [null],
      lineage: [null],
      maritalStatus: [null],
      kinships: [null],
      requered: [null],
      comment: [null],
    })

  }
   submitForm() {
    console.log(this.member)
    
  }

}
