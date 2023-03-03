import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { messageFeature } from '../../store/message/message.reducer';
import { LetModule } from '@ngrx/component';
// import { postReducer } from "./store/post/post.reducer";
// import { messageReducer } from "./store/message/message.reducer";

@NgModule({
  imports: [
    CommonModule,
    LetModule,
    FormsModule,
    ReactiveFormsModule,
    MessageRoutingModule,
    StoreModule.forFeature(messageFeature)
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }