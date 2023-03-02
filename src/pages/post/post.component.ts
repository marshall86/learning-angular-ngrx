import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../../interfaces/post.model';
import { AppState } from '../../interfaces/app.model';
import * as PostActions from '../../store/post/post.actions';
import { postSelector } from '../../store/post/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post$: Observable<Post> = this.store.pipe(select(postSelector));
  text: string;

  constructor(private store: Store<AppState>) { }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  vote(type: string):void {
    this.store.dispatch(new PostActions[type]());
  }

}