import { createReducer, on } from '@ngrx/store';
import { Book } from '../../interfaces/books.model';

import { booksFetchAPIFailure, booksFetchAPISuccess } from './books.actions';

export const initialState: Book[] = [];

export const booksReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (_state, { books }) => books),
  on(booksFetchAPIFailure, (state, { }) => state)
);
