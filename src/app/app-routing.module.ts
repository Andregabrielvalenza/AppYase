import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'onboarding1',
    pathMatch: 'full'
  },
  {
    path: 'onboarding1',
    loadChildren: () => import('./onboarding1/onboarding1.module').then( m => m.Onboarding1PageModule)
  },
  {
    path: 'onboarding2',
    loadChildren: () => import('./onboarding2/onboarding2.module').then( m => m.Onboarding2PageModule)
  },
  {
    path: 'onboarding3',
    loadChildren: () => import('./onboarding3/onboarding3.module').then( m => m.Onboarding3PageModule)
  },
  {
    path: 'onboarding4',
    loadChildren: () => import('./onboarding4/onboarding4.module').then( m => m.Onboarding4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
