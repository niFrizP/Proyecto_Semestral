import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./pages/tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'refresco',
    loadChildren: () => import('./pages/refresco/refresco.module').then( m => m.RefrescoPageModule)
  },
  {
    path: 'generarcodigo',
    loadChildren: () => import('./pages/generarcodigo/generarcodigo.module').then( m => m.GenerarcodigoPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./pages/acerca/acerca.module').then( m => m.AcercaPageModule)
  },  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'matematicas',
    loadChildren: () => import('./pages/matematicas/matematicas.module').then( m => m.MatematicasPageModule)
  },
  {
    path: 'antropologia',
    loadChildren: () => import('./pages/antropologia/antropologia.module').then( m => m.AntropologiaPageModule)
  },
  {
    path: 'comunicacion',
    loadChildren: () => import('./pages/comunicacion/comunicacion.module').then( m => m.ComunicacionPageModule)
  },
  {
    path: 'estadistica',
    loadChildren: () => import('./pages/estadistica/estadistica.module').then( m => m.EstadisticaPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./pages/ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'programacion',
    loadChildren: () => import('./pages/programacion/programacion.module').then( m => m.ProgramacionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
