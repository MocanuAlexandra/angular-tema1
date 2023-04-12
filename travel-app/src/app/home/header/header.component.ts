import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityModel } from 'src/app/models/city-model';
import { CityService } from 'src/app/services/city-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  // Receive the selected city from the parent component
  @Input() selectedCity!: CityModel;

  anteTitle = 'DISCOVER THE COLORFUL WORLD';
  imagePath =
    'https://yocto.scrolller.com/part-2-the-world-needs-more-desktop-wallpapers-8p83s1oiwj.jpg';

    constructor(private router: Router, private cityService: CityService) { }

  ngOnInit(): void {
  }

  // Click event that triggers the navigation to the discovery page
  // Also, it sets the selected city in the city service
  goToDiscoveryPage() {
    this.cityService.setSelectedCity(this.selectedCity);
    this.router.navigateByUrl("/discovery");
  }
}
