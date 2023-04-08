import { Component } from '@angular/core';
import { SingleServiceModel } from 'src/app/models/service-model';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  title = 'OUR SERVICES';

  arrayOfServices: SingleServiceModel[] = [
    {
      title: 'TRAVEL',
      subTitle: 'Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      title: 'TRAVEL ARRANGEMENTS',
      subTitle: 'Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      title: 'OUR PROFESSIONAL GUIDE',
      subTitle: 'Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      title: 'ACTIVITIES',
      subTitle: 'Subtitle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ];
}
