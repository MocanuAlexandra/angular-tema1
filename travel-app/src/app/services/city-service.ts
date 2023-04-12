import { Injectable } from '@angular/core';
import { CityModel } from '../models/city-model';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  private _selectedCity!: CityModel;

  constructor() { }

  setSelectedCity(city: CityModel) {
    this._selectedCity = city;
  }

  get selectedCity() {
    return this._selectedCity;
  }
}