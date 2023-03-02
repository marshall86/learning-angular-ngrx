import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { bookFetchAPIFailureAction, bookFetchAPISuccessAction, getBooksListAction } from './books.actions';
import { BooksListService } from '../../services/books.service';
import { booksFeatureSelector } from './books.selectors';
import { Book } from '../../interfaces/books.model';
 
 @Injectable()
 export class BookEffects {

   constructor(
     private store: Store, 
     private actions$: Actions,
     private booksService: BooksListService
   ) {}
 
   loadBooks$ = createEffect(() =>
     this.actions$.pipe(
       ofType(getBooksListAction),
        withLatestFrom(this.store.pipe(select(booksFeatureSelector))),
        mergeMap(() => {
          return this.booksService
            .getBooks()
            .pipe(
              map((data: Book[]) => bookFetchAPISuccessAction({ books: data })),
              catchError(() => of(bookFetchAPIFailureAction()))
            );
        })
      )
   );
 
 }