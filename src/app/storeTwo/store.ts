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

// import { crewCard,cartItems } from './custom.reducers'
import {myReducer} from  './custom.reducers';

const middleware = [createLogger()];

const composeEnhancers =
  typeof window === 'object' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

//  const rootReducer = combineReducers({
//      crewCard,
//      cartItems
//  });


const initialState: IAppState = {
  count:100
};


export const store: Store<any> = createStore(
  myReducer,initialState,
  enhancer
);