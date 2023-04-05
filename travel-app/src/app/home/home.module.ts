import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
