import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
})
export class ModalAlertComponent implements OnInit {
  @Input() id;
  @Output() close = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }
  isLoader = false;

  ngOnInit(): void {
  }
  onClose() {
    this.close.emit()
  }

  deleteConfirm() {
    this.delete.emit(this.id)
  }

}
