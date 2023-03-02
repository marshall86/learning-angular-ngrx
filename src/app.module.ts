import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { postReducer } from "./store/post/post.reducer";
// import { messageReducer } from "./store/message/message.reducer";

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
    StoreModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ]
})
export class AppModule { }