import { Reducer } from 'redux';
import {IAppState} from './app-state.type';


// create initial state for reducer including intilized
const initialState = {
  counter: 2100
  };

export const homeReducer: Reducer<IAppState> = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { counter: state.counter + 1 });
    case 'DECREMENT':
      return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state;
  }
};
