import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityModel } from 'src/app/models/city-model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input()
  city!: CityModel;

  @Output() cityEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  // Pass the city title to the parent component 
  visitNow() {
    this.cityEmitter.emit(this.city.name);
  }
}
