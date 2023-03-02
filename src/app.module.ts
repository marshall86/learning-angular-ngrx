import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MetaReducer, StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { debug } from "./store/meta.reducers";
// import { postReducer } from "./store/post/post.reducer";
// import { messageReducer } from "./store/message/message.reducer";

export const metaReducers: MetaReducer<any>[] = [debug];


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* StoreModule.forRoot({
      message: messageReducer,
      post: postReducer
    })*/
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ]
})
export class AppModule { }