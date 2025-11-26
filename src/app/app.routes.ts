import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/region/region.module').then(m => m.RegionModule) }
];
