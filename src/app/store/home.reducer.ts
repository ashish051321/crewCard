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

export const homeReducer: Reducer<IAppState> = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { crewCard:{...state.crewCard, flightsserved: (+state.crewCard.flightsserved + 1).toString()}} );
    case 'DECREMENT':
    return Object.assign({}, state, { crewCard:{...state.crewCard, flightsserved: (+state.crewCard.flightsserved - 1).toString()}} );    default:
      return state;
  }
};
