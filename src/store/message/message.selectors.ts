import { createFeatureSelector, createSelector } from "@ngrx/store";

export const messageFeatureSelector = createFeatureSelector<string>('message');

export const messageSelector = createSelector(
  messageFeatureSelector,
  (messageState: string) => messageState
);
