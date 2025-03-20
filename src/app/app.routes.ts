import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'films',
    loadComponent: () =>
      import('./pages/films/films.component').then((m) => m.FilmsComponent),
  },
  {
    path: 'character',
    loadComponent: () =>
      import('./pages/character/character.component').then((m) => m.CharacterComponent),
  },
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'films'
  }
];
