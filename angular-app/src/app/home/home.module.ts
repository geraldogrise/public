import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from "../core/core.module";



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class HomeModule { }
