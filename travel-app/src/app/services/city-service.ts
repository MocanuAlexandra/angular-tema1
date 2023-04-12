import { Injectable } from '@angular/core';
import { CityModel } from '../models/city-model';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  private _selectedCity!: CityModel;

  constructor() { }

  // Setter
  setSelectedCity(city: CityModel) {
    this._selectedCity = city;
  }

  // Getter
  get selectedCity() {
    return this._selectedCity;
  }
}