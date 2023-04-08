import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  title: string = 'Search & Book our destinations';
  placeholder: string = 'Select your city';

  //searchTerm = '';
}
