import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksListService } from '../../services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/books.effects';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { LetModule } from '@ngrx/component';
// import { logger } from '../../store/meta.reducers';

/*, {
      metaReducers: [logger]
    }*/

@NgModule({
  imports: [
    CommonModule,
    LetModule,
    HttpClientModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature(BookEffects)
  ],
  declarations: [
    BooksComponent
  ],
  providers: [
    BooksListService
  ]
})
export class BooksModule { }