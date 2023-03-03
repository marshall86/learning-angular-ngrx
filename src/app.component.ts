import { Component } from "@angular/core";
// import { Store } from "@ngrx/store";
// import { Observable } from "rxjs";

// import { AppState } from "./interfaces/app.model";
// import { Post } from "./interfaces/post.model";
// import * as PostActions from './store/post/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 

  // message$: Observable<string> = this.store.select('message');
  // post$: Observable<Post> = this.store.select('post');

 // public text: string;

  // constructor(private store: Store<AppState>) { }

  /* setMessage(type: string): void {
    this.store.dispatch({type: type});
  }*/

  /* editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  vote(type: string):void {
    this.store.dispatch(new PostActions[type]());
  } */

}