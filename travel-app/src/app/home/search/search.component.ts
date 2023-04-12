import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityModel } from 'src/app/models/city-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // Send the city to the parent component
  @Output() searchedCityEmitter: EventEmitter<CityModel> =
    new EventEmitter<CityModel>();

  @Input() arrayOfCities!: CityModel[];

  title: string = 'Search & Book our destinations';
  placeholder: string = 'Select your city';
  searchedCityName: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmitSearch() {
    this.searchedCityEmitter.emit(
      this.arrayOfCities.find((city) => city.name === this.searchedCityName)
    );
  }
}
