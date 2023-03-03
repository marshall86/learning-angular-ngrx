import { isDevMode, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { postReducer } from "./store/post/post.reducer";
// import { messageReducer } from "./store/message/message.reducer";

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ]
})
export class AppModule { }