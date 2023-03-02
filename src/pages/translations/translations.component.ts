import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../interfaces/app.model';
import { messageSelector } from '../../store/message/post.selectors';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent {

  message$: Observable<string> = this.store.pipe(select(messageSelector));

  constructor(private store: Store<AppState>) { }

  setMessage(type: string): void {
    this.store.dispatch({type: type});
  }

}