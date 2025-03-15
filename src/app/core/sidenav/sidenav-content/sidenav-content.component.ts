import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  imports: [],
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
