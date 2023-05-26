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
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-correo',
    loadChildren: () => import('./login-correo/login-correo.module').then( m => m.LoginCorreoPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'crear-perfil',
    loadChildren: () => import('./crear-perfil/crear-perfil.module').then( m => m.CrearPerfilPageModule)
  },
  {
    path: 'regitro-ubicacion',
    loadChildren: () => import('./regitro-ubicacion/regitro-ubicacion.module').then( m => m.RegitroUbicacionPageModule)
  },
  {
    path: 'gustos-interes',
    loadChildren: () => import('./gustos-interes/gustos-interes.module').then( m => m.GustosInteresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
