import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./pages/translations/translations.module').then(m => m.TranslationsModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then(m=> m.PostModule)
  },
  { 
    path: '' ,
    loadChildren: () => import('./pages/translations/translations.module').then(m => m.TranslationsModule),
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }