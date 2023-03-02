import { createAction, props } from "@ngrx/store";
import { Book } from "../../interfaces/books.model";

export const GET_BOOKS_LIST = '[Books] get list';
export const BOOKS_API_SUCESS = '[Books] API success';
export const BOOKS_API_FAILURE = '[Books] API failure';

export const getBooksListAction = createAction(GET_BOOKS_LIST);

export const bookFetchAPISuccessAction = createAction(
  BOOKS_API_SUCESS,
  props<{ books: Book[] }>()
);

export const bookFetchAPIFailureAction = createAction(BOOKS_API_FAILURE);