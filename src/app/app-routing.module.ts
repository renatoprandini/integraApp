import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categorias/alterar/:id',
    loadChildren: () => import('./categorias/alterar/alterar.module').then( m => m.AlterarPageModule)
  },
  {
    path: 'categorias/cadastrar',
    loadChildren: () => import('./categorias/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'categorias/listar',
    loadChildren: () => import('./categorias/listar/listar.module').then( m => m.ListarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
