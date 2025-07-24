import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    title: 'Welcome',
    loadComponent: () => import('./pages/welcome/welcome.component')
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    children: [
      {
        path: 'tasting-menu',
        title: 'Tasting Menu',
        loadComponent: () => import('./pages/tasting/tasting.component')
      },
      {
        path: 'work',
        title: 'Project',
        loadComponent: () => import('./pages/work/work.component')
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./pages/about/about.component')
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


export default routes;
