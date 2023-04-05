import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  anteTitle = 'DISCOVER THE COLORFUL WORLD';
  subtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ';
  imagePath =
    'https://www.veloquebecvoyages.com/wp-content/uploads/2022/11/algarve-9jours-liberte-a-velo-banniere-1920x630-1-scaled.jpg  ';

  @Input()
  title!: string;
}
