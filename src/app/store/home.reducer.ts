import { Reducer } from 'redux';
import { IAppState } from './app-state.type';


// create initial state for reducer including intilized
const initialState: IAppState = {
  crewCard: {
    name: "Jessica Woods",
    cmtype: "AO Crew Member",
    title: "Gate Agent",
    years: "7",
    flightsserved: "3252"
  },
  cartItems: ["NA"]
};

//The problem with using multiple reducers is 
// that the state object shape and the reducer parameters need to be managed well

export const homeReducer: Reducer<IAppState> = ( state = initialState , action) => {
  switch (action.type) {
    
    case 'INCREMENT':
      return Object.assign({}, state, { crewCard:{...state.crewCard, flightsserved: (+state.crewCard.flightsserved + 1).toString()}} );
    
    case 'DECREMENT':
    return Object.assign({}, state, { crewCard:{...state.crewCard, flightsserved: (+state.crewCard.flightsserved - 1).toString()}} );
        
    default:  
    return state;
  }
};


export const cartReducer: Reducer<IAppState> = ( state = initialState , action) => {
  switch (action.type) {
    
    case 'ADDITEM':
      return Object.assign({}, state, { cartItems:[...state.cartItems].push("added one more") });
    
    case 'DELETEITEM':
    return Object.assign({}, state, { cartItems:[...state.cartItems].push("deleted one more") });
        
    default:  
    return state;
  }

}