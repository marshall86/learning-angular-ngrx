import { createReducer, on } from '@ngrx/store';

import { BookAPIInterface } from '../../interfaces/books.model';
import { booksFetchAPIFailure, booksFetchAPISuccess } from './books.actions';

export const initialState: BookAPIInterface = {
  isLoading: true,
  books: []
};

export const booksReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (_state, { isLoading, books }): BookAPIInterface => ({
    isLoading,
    books
  })),
  on(booksFetchAPIFailure, (state, { isLoading}): BookAPIInterface => ({
    ...state,
    isLoading
  }))
);
