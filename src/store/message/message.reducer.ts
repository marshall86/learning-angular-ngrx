import { Action, createFeature } from "@ngrx/store";

export const defaultMessageState: string = 'Hello World!';

export function messageReducer(state: string = defaultMessageState, action: Action) {

  console.log('messageReducer ', action.type, state);
  switch(action.type) {

    case 'SPANISH':
       return state = 'Hola Mundo!';

    case 'FRENCH':
        return state = 'Bonjour a tout le monde!';

    case 'RESET':
        return defaultMessageState;

    default:
        return state; 

  }

}

////

export const messageFeature = createFeature({
  name: 'message',
  reducer: messageReducer
});