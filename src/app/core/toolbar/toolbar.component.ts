import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  sideNavOpen = false;
  toggleSidenav = output<boolean>();

  toggleSidenavOnClick() {
    console.log('sideNavOpen', this.sideNavOpen);
    this.sideNavOpen = !this.sideNavOpen;
    this.toggleSidenav.emit(this.sideNavOpen);
  }
}
