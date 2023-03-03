import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { postFeature } from '../../store/post/post.reducer';
import { LetModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    LetModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    StoreModule.forFeature(postFeature)
  ],
  declarations: [
    PostComponent
  ]
})
export class PostModule { }