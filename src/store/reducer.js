let initialTransaction = [
  // { id: 1, transDescription: "Salary", transAmount: 100 },
  // { id: 2, transDescription: "Rent", transAmount: -200 },
  // { id: 3, transDescription: "Income", transAmount: 500 },
];

export const reducer = (state = initialTransaction, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      console.log(action.payload)
      return [...state, action.payload];
    }
    case "DEL_TRANSACTION":{
      return state.filter((obj)=>obj.id!=action.payload.id)
    }
    default: {
      return state;
    }
  }
};
