import {} from '@angular/router';
import { ServerRoute } from '@angular/ssr';

export const routes: ServerRoute[] = [
  {
    path: '/home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
];
