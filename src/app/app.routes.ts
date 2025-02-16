import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    title: 'Portfolio',
    loadChildren: () => import('./characters/characters.routes'),
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  }
];
