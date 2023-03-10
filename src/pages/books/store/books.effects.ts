import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { booksFetchAPIFailure, booksFetchAPISuccess, invokeBooksAPI } from './books.actions';
import { BooksListService } from '../../../services/books.service';
import { selectBooks } from './books.selectors';
import { Book } from '../../../interfaces/books.model';

@Injectable()
export class BookEffects {
  constructor(
    private store: Store, 
    private actions$: Actions,
    private booksService: BooksListService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
        withLatestFrom(this.store.pipe(select(selectBooks))),
        mergeMap(([, _bookformStore]) => {
          return this.booksService
            .getBooks()
            .pipe(
              map((data: Book[]) => booksFetchAPISuccess({ isLoading: false, books: data })),
              catchError(() => of(booksFetchAPIFailure({isLoading: false})))
            );
        })
      )
  );

}