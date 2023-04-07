import { Component, Input } from '@angular/core';
import { SingleServiceModel } from 'src/app/models/service-model';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.scss'],
})
export class SingleServiceComponent {
  @Input()
  service!: SingleServiceModel;
}
