import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatarazzoService } from './service/matarazzo.service';
import { ViewsModule } from './modules/views/views.module';
import { FamilyTreeModule } from './modules/family-tree/family-tree.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ViewsModule,
    FamilyTreeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
  ],
  providers: [MatarazzoService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
