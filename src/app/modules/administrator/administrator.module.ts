import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLoginComponent } from './container-login/container-login.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ContainerLoginComponent, LoginComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdministratorModule {}
