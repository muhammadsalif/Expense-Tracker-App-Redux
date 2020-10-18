import { DEL_TRANSACTION } from "./actions";
import { ADD_TRANSACTION } from "./actions";



let initialTransaction = [
];

export const reducer = (state = initialTransaction, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      // console.log("reducer called")
      // console.log(action.type)
      // console.log(action.payload)
      
      return [...state, action.payload];
    }
    case DEL_TRANSACTION:{
      return state.filter((obj)=>obj.id!==action.payload.id)
    }
    default: {
      return state;
    }
  }
};
