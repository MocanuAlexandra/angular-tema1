import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CityModel } from 'src/app/models/city-model';
import { CityService } from 'src/app/services/city-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Receive the selected city from the parent component
  @Input() selectedCity!: CityModel;

  anteTitle = 'DISCOVER THE COLORFUL WORLD';
  imagePath =
    'https://yocto.scrolller.com/part-2-the-world-needs-more-desktop-wallpapers-8p83s1oiwj.jpg';
}
