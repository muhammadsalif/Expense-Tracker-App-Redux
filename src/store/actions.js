export let ADD_TRANSACTION = "ADD_TRANSACTION";
export let DEL_TRANSACTION = "DEL_TRANSACTION";

export const addTransaction = (id, description, amount) => {
  return {
    type: ADD_TRANSACTION,
    payload: { id: id, transDescription: description, transAmount: amount },
  };
};

export const deleteTransaction = (id) => {
  return {
    type: DEL_TRANSACTION,
    payload: { id: id },
  };
};
