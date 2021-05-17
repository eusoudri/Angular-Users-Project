import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activatedRoute: string = "";
  
  private routesDic = [
    ['/family-member-list','Membros'],
    ['/','Famílias'],
  ]
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.resolveRoute(this.router.url);
    this.router.events.subscribe(el => {

      if (el instanceof NavigationEnd) {
        this.resolveRoute(this.router.url);
      }
    })
  }

  private resolveRoute (rota:string):void{
    
    this.routesDic.forEach(ar => {
      if (ar[0] == rota) {
        this.activatedRoute = ar[1];
      }
    });
  }
}
