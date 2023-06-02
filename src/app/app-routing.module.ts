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
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'resultado-busqueda',
    loadChildren: () => import('./resultado-busqueda/resultado-busqueda.module').then( m => m.ResultadoBusquedaPageModule)
  },
  {
    path: 'antencion-cliente',
    loadChildren: () => import('./antencion-cliente/antencion-cliente.module').then( m => m.AntencionClientePageModule)
  },
  {
    path: 'cancelar-compras',
    loadChildren: () => import('./cancelar-compras/cancelar-compras.module').then( m => m.CancelarComprasPageModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  },
  {
    path: 'fraude',
    loadChildren: () => import('./fraude/fraude.module').then( m => m.FraudePageModule)
  },
  {
    path: 'cateogria-rubros',
    loadChildren: () => import('./cateogria-rubros/cateogria-rubros.module').then( m => m.CateogriaRubrosPageModule)
  },
  {
    path: 'galeria-producto',
    loadChildren: () => import('./galeria-producto/galeria-producto.module').then( m => m.GaleriaProductoPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'gracias-reserva',
    loadChildren: () => import('./gracias-reserva/gracias-reserva.module').then( m => m.GraciasReservaPageModule)
  },
  {
    path: 'comida-bebida',
    loadChildren: () => import('./comida-bebida/comida-bebida.module').then( m => m.ComidaBebidaPageModule)
  },
  {
    path: 'busqueda-comidas-bebidas',
    loadChildren: () => import('./busqueda-comidas-bebidas/busqueda-comidas-bebidas.module').then( m => m.BusquedaComidasBebidasPageModule)
  },
  {
    path: 'micro-productores',
    loadChildren: () => import('./micro-productores/micro-productores.module').then( m => m.MicroProductoresPageModule)
  },
  {
    path: 'productores-resultados',
    loadChildren: () => import('./productores-resultados/productores-resultados.module').then( m => m.ProductoresResultadosPageModule)
  },
  {
    path: 'micro-detalle',
    loadChildren: () => import('./micro-detalle/micro-detalle.module').then( m => m.MicroDetallePageModule)
  },
  {
    path: 'anuncio',
    loadChildren: () => import('./anuncio/anuncio.module').then( m => m.AnuncioPageModule)
  },
  {
    path: 'ficha-tecnica',
    loadChildren: () => import('./ficha-tecnica/ficha-tecnica.module').then( m => m.FichaTecnicaPageModule)
  },
  {
    path: 'unete-yase',
    loadChildren: () => import('./unete-yase/unete-yase.module').then( m => m.UneteYasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
