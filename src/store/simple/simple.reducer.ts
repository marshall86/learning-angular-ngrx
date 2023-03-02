import { Action } from "@ngrx/store";

export const defaultSimpleState: string = 'Hello World!';

export function simpleReducer(state: string = defaultSimpleState, action: Action) {

  console.log('simpleReducer ', action.type, state);
  switch(action.type) {

    case 'SPANISH':
       return state = 'Hola Mundo!';

    case 'FRENCH':
        return state = 'Bonjour a tout le monde!';

    case 'RESET':
        return defaultSimpleState;

    default:
        return state; 

  }

}