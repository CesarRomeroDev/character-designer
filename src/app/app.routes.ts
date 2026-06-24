import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    title: 'Welcome',
    loadComponent: () => import('./shared/page/welcome/welcome.component')
  },
  {
    path: '',
    loadComponent: () => import('./characters/pages/home/home.component'),
    children: [
      {
        path: 'tasting-menu',
        title: 'Tasting Menu',
        loadComponent: () => import('./characters/pages/tasting/tasting.component')
      },
      {
        path: 'work',
        title: 'Project',
        loadComponent: () => import('./characters/pages/work/work.component')
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./characters/pages/about/about.component')
      },
      {
        path: '**',
        redirectTo: 'tasting-menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  }
];
