import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SingleServiceComponent } from './our-services/single-service/single-service.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    HeaderComponent,
    OurServicesComponent,
    SingleServiceComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
