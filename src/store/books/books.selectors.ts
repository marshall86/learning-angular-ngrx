import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../../interfaces/books.model";

export const booksFeatureSelector = createFeatureSelector<Book[]>('books');

export const booksSelector = createSelector(
  booksFeatureSelector,
  (booksState: Book[]) => booksState
);
