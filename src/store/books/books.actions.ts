import { createAction, props } from '@ngrx/store';
import { Book } from '../../interfaces/books.model';

export enum BooksAPI {
  LOAD = '[Books API] --- Call API',
  SUCCESS = '[Books API] Fetch API Success',
  FAILURE = '[Books API] Fetch API Failure'
};

export const invokeBooksAPI = createAction(
  BooksAPI.LOAD
);

export const booksFetchAPISuccess = createAction(
  BooksAPI.SUCCESS,
  props<{ books: Book[] }>()
);

export const booksFetchAPIFailure = createAction(
  BooksAPI.FAILURE
);
