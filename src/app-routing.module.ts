import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./pages/translations/translations.module').then(m => m.TranslationsModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then(m=> m.PostsModule)
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