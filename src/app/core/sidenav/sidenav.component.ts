import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    ToolbarComponent,
    MatButtonModule,
    SidenavContentComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  drawer = viewChild.required<MatDrawer>('drawer');

  updateValue() {
    this.drawer().toggle();
  }
}
