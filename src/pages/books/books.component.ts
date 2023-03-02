import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../interfaces/app.model';
import { Book } from '../../interfaces/books.model';
import { getBooksListAction } from '../../store/books/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]> = this.store.pipe(select('books'));
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(getBooksListAction());
  }

}