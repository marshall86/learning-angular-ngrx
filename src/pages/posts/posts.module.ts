import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { postFeature } from '../../store/post/post.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    StoreModule.forFeature(postFeature)
  ],
  declarations: [
    PostsComponent
  ]
})
export class PostsModule { }