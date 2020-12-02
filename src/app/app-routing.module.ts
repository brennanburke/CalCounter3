import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'food-diary',
    loadChildren: () => import('./food-diary/food-diary.module').then( m => m.FoodDiaryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'new-entry',
    loadChildren: () => import('./new-entry/new-entry.module').then( m => m.NewEntryPageModule)
  },
  {
    path: 'entry-detail',
    loadChildren: () => import('./entry-detail/entry-detail.module').then( m => m.EntryDetailPageModule)
  },
  {
    path: 'flashlight',
    loadChildren: () => import('./flashlight/flashlight.module').then( m => m.FlashlightPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
