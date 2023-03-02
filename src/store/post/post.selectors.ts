import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "../../interfaces/post.model";

export const postFeatureSelector = createFeatureSelector<Post>('post');

export const postSelector = createSelector(
  postFeatureSelector,
  (postState: Post) => postState
);
