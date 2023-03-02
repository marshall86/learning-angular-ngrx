import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageRoutingModule } from './message-routing.module';
import { StoreModule } from '@ngrx/store';
import { messageFeature } from '../../store/message/message.reducer';

@NgModule({
  imports: [
    CommonModule,
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