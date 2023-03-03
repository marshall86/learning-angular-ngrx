import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../interfaces/app.model';
import { messageSelector } from '../../store/message/message.selectors';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  message$: Observable<string> = this.store.pipe(select(messageSelector));

  constructor(private store: Store<AppState>) { }

  setMessage(type: string): void {
    this.store.dispatch({type: type});
  }

}