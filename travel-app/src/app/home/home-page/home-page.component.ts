import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  headerTitle: string = 'NEW ADVENTURE';

  // Receive the city title from the child component
  onCityTitleSelected(cityTitle: string) {
    this.headerTitle = cityTitle;
  }
}
