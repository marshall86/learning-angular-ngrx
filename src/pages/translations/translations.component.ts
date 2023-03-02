import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../interfaces/app.model';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  message$: Observable<string> = this.store.select('message');

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  setMessage(type: string): void {
    this.store.dispatch({type: type});
  }

}