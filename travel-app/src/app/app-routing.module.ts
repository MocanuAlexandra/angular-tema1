import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { HeaderComponent } from './home/header/header.component';
import { DiscoveryPageComponent } from './discovery-page/discovery-page.component';

const routes: Routes = [
  {
    path: 'discovery',
    component: DiscoveryPageComponent,
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
