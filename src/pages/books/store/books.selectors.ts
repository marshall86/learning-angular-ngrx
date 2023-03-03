import { createFeatureSelector } from '@ngrx/store';

import { BookAPIInterface } from '../../../interfaces/books.model';

export const selectBooks = createFeatureSelector<BookAPIInterface>('books');
