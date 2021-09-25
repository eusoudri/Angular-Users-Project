import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { KinshipRelationship } from '../../../../models/kinship-relationship';
@Component({
  selector: 'app-modal-breafing-member',
  templateUrl: './modal-breafing-member.component.html'
})
export class ModalBreafingMemberComponent implements OnInit {
  @Input() member;
  @Input() family;
  public Editor = ClassicEditor;
  @Output() close = new EventEmitter();
  kinshipRelationship: KinshipRelationship = new KinshipRelationship();

  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.close.emit()
  }

}
