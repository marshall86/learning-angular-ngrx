import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post.model';
import { AppState } from '../../interfaces/app.model';

import * as PostActions from '../../store/post/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post$: Observable<Post> = this.store.select('post');

  public text: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  vote(type: string):void {
    this.store.dispatch(new PostActions[type]());
  }

}