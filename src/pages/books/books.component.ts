import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../interfaces/app.model';
import { Book } from '../../interfaces/books.model';
import { invokeBooksAPI } from '../../store/books/books.actions';
import { selectBooks } from '../../store/books/books.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<readonly Book[]> = this.store.pipe(select(selectBooks));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(invokeBooksAPI());
  }

}