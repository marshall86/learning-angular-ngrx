import { createFeature} from '@ngrx/store';
import { Post } from '../../interfaces/post.model';
import * as PostActions from './post.actions';

export type Action = PostActions.All;

const defaultState: Post = { 
  text: 'Text',
  likes: 0
};

const newState = (state, newData) => Object.assign({}, state, newData);


// we use 'export function' instead of 'export const' because of production build
export function postReducer(state: Post = defaultState, action: Action) {

    switch(action.type) {

      case PostActions.EDIT_TEXT:
        return newState(state, {text: action.payload});

      case PostActions.UPVOTE:
        return newState(state, {likes: state.likes+1});

      case PostActions.DOWNVOTE:
        return newState(state, {likes: state.likes-1});

      case PostActions.RESET:
        return defaultState;

      default:
        return state; 

    }

}

//////

export const postFeature = createFeature({
  name: 'post',
  reducer: postReducer
});
