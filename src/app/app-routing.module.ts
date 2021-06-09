import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'dimdian',
    loadChildren: () => import('./dimdian/dimdian.module').then( m => m.DimdianPageModule)
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then( m => m.TimePageModule)
  },
  {
    path: 'trial',
    loadChildren: () => import('./trial/trial.module').then( m => m.TrialPageModule)
  },
  {
    path: 'trial',
    loadChildren: () => import('./trial/trial.module').then( m => m.TrialPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
