import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-content',
  imports: [MatIconModule],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.scss',
})
export class SidenavContentComponent {
  menuItems = [
    { name: 'Home', route: '/home', icon: 'home' },
    { name: 'About', route: '/about', icon: 'info' },
    { name: 'Contact', route: '/contact', icon: 'contact' },
  ];
}
