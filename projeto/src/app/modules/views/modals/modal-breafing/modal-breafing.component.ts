import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatarazzoService } from '../../../../service/matarazzo.service';
import { Member } from '../../../../models/member';

@Component({
  selector: 'app-modal-breafing',
  templateUrl: './modal-breafing.component.html'
})
export class ModalBreafingComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() family;
  public members: Member[]

  constructor(
    private matarazzoService: MatarazzoService, 
  ) { }

  ngOnInit(): void {
    this.getMember()
  }
  onClose() {
    this.close.emit()
  }
  getMember() {
    debugger
    this.matarazzoService.getMemberByFamilyId(this.family.id)
    .subscribe(res => {
      this.members = res;
    });

  }

}
