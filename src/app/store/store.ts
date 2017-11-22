import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';

// import { NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { IAppState } from './app-state.type';

import { crewCard,cartItems } from './home.reducer'

const middleware = [createLogger()];

const composeEnhancers =
  typeof window === 'object' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

 const rootReducer = combineReducers({
     crewCard,
     cartItems
 });


const initialState: IAppState = {
  crewCard: {
    name: "Christine",
    cmtype: "AO Crew Member",
    title: "Gate Agent",
    years: "7",
    flightsserved: "5000"
  },
  cartItems: ["NA"]
};


export const store: Store<any> = createStore(
  rootReducer,initialState,
  enhancer
);