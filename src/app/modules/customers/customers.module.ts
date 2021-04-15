import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliesComponent } from './views/families/families.component';
import { NavComponent } from './views/nav/nav.component';
import { HeaderComponent } from './views/header/header.component';
import { ContainerComponent } from './views/container/container.component';



@NgModule({
  declarations: [
    FamiliesComponent,
    NavComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
