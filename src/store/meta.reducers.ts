import { ActionReducer } from "@ngrx/store";

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {

  return function(state, action) {
    console.log('state ', state);
    console.log('action ', action);

    return reducer(state, action);
  }

}

export function logger( reducer ) {
  return function newReducer( state, action ) {
    console.group(action.type);
    const nextState = reducer({state}, action);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
    console.groupEnd();
    return nextState;
  }
}