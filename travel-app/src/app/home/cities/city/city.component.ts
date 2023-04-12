import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityModel } from 'src/app/models/city-model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  // Receive the city from the parent component
  @Input() city!: CityModel;

  // Send the city to the parent component
  @Output() cityEmitter: EventEmitter<CityModel> =
    new EventEmitter<CityModel>();

  constructor() {}

  ngOnInit(): void {}

  // Function that passes the city to the parent component
  visitNow() {
    this.cityEmitter.emit(this.city);
  }
}
