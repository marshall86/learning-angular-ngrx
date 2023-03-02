import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessageModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then(m=> m.PostModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule)
  },
  { 
    path: '' ,
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessageModule),
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