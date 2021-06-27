import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
})
export class ModalAlertComponent implements OnInit {
  activatedRoute: string = "";
  @Input() id;
  @Input() person;
  @Output() close = new EventEmitter();
  @Output() delete = new EventEmitter();
  private routesDic = [
    ['/family-member-list/','Membros'],
    ['/','Famílias'],
  ]

  constructor(private router: Router) { }
  isLoader = false;

  ngOnInit(): void {
    this.resolveRoute(this.router.url);
    this.router.events.subscribe(el => {

      if (el instanceof NavigationEnd) {
        this.resolveRoute(this.router.url);
      }
    })
  }
  onClose() {
    this.close.emit()
  }
  deleteConfirm() {
    this.isLoader = true;
    this.delete.emit(this.id)
  }
  private resolveRoute (rota:string):void{
    
    this.routesDic.forEach(ar => {
      if (ar[0] == rota) {
        this.activatedRoute = ar[1];
      }
    });
  }

}
