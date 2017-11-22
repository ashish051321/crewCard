import { Reducer } from 'redux';
import { IAppState } from './app-state.type';


// create initial state for reducer including intilized
// const initialState: IAppState = {
//   crewCard: {
//     name: "Jessica Woods",
//     cmtype: "AO Crew Member",
//     title: "Gate Agent",
//     years: "7",
//     flightsserved: "3252"
//   },
//   cartItems: ["NA"]
// };

//The problem with using multiple reducers is 
// that the state object shape and the reducer parameters need to be managed well

//Reducer to take state and increment or decrement the flightsserved property, 
// depending upon the value of action.type
export const crewCard: Reducer<any> = (state = {}, action) => {
  switch (action.type) {

    case 'INCREMENT':
      return Object.assign({}, state, { ...state, flightsserved: (+state.flightsserved + 1).toString() });

    case 'DECREMENT':
      return Object.assign({}, state, { ...state, flightsserved: (+state.flightsserved - 1).toString() });

    default:
      return state;
  }
};


//Reducer to take state and add or delete cart items, 
// depending upon the value of action.type
export const cartItems: Reducer<any> = (state = [], action) => {
  switch (action.type) {

    case 'ADDITEM':
      {
        console.log(state);
        return [...state,"Added Item"];
      }

    case 'DELETEITEM':
        return [...state,"Deleted Item"];

    default:
      return state;
  }

}