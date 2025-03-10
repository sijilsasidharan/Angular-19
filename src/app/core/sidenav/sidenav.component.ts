import { Component, input, signal, viewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, ToolbarComponent, MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  openSideNav = signal<boolean>(true);
  drawer = viewChild<MatDrawer>('drawer');

  updateValue(value: boolean) {
    console.log(this.drawer());
    this.drawer()?.toggle();
    this.openSideNav.update(() => value);
  }
}
