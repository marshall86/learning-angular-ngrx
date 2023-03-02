import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../../interfaces/books.model';

export const selectBooks = createFeatureSelector<Book[]>('books');
