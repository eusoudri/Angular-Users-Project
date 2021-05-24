import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modal-add-family',
  templateUrl: './modal-add-family.component.html',
  styleUrls: ['./modal-add-family.component.scss']
})
export class ModalAddFamilyComponent implements OnInit {
  family: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {

    this.family =  this.fb.group({
      name: [null]
    })

  }
   teste() {
    console.log(this.family)
    
  }
  

}
