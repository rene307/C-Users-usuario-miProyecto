/*import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'circulo',
    loadComponent: () => import('./comp/circulo/circulo.component').then(m => m.CirculoComponent),

  },

  {
    path: 'triangulo',
    loadComponent: () => import('./comp/triangulo/triangulo.component').then(m => m.TrianguloComponent),
  }



];*/
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'circulo',
    loadComponent: () =>
      import('./comp/circulo/circulo.component').then(
        (m) => m.CirculoComponent
      ),
  },
  {
    path: 'triangulo',
    loadComponent: () =>
      import('./comp/triangulo/triangulo.component').then(
        (m) => m.TrianguloComponent
      ),
  },
];
