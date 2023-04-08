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
    'https://yocto.scrolller.com/part-2-the-world-needs-more-desktop-wallpapers-8p83s1oiwj.jpg';

    @Input() title!: string;
}
