import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityModel } from 'src/app/models/city-model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  // Send the city to the parent component
  @Output() citySelectedEmitter = new EventEmitter<CityModel>();

  // Receive the array of cities from the parent component
  @Input() arrayOfCities!: CityModel[];

  title = 'MOST POPULAR';

  currentPageCities!: CityModel[];
  startIndex: number = 0;
  pageLength: number = 6;

  constructor() {}

  ngOnInit(): void {
    this.currentPageCities = this.arrayOfCities.slice(
      this.startIndex,
      this.pageLength
    );
  }

  // Click methods
  previous() {
    if (this.startIndex - this.pageLength < 0) {
      return;
    }

    const lastCityIndexOfCurrentPage = this.startIndex;
    this.startIndex -= this.pageLength;

    this.currentPageCities = this.arrayOfCities.slice(
      this.startIndex,
      lastCityIndexOfCurrentPage
    );
  }

  next() {
    if (this.startIndex + this.pageLength > this.arrayOfCities.length) return;

    this.startIndex += this.pageLength;
    let lastCityIndexOfCurrentPage;

    if (this.startIndex + this.pageLength < this.arrayOfCities.length)
      lastCityIndexOfCurrentPage = this.startIndex + this.pageLength;
    else lastCityIndexOfCurrentPage = this.arrayOfCities.length;

    this.currentPageCities = this.arrayOfCities.slice(
      this.startIndex,
      lastCityIndexOfCurrentPage
    );
  }

  // Pass the city to the parent component
  onCitySelected(city: CityModel) {
    this.citySelectedEmitter.emit(city);
  }
}
