import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/actions";

const AddTransaction = () => {
  let [id, setId] = useState(0);

  let [amount, setAmount] = useState(1);
  let [description, setDescription] = useState("");
  // console.log(description);
  // console.log(amount);

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    setId((id += 1));
    e.preventDefault();

    dispatch(addTransaction(id, description, amount));

    // dispatch({
    //   type: "ADD_TRANSACTION",
    //   payload: {
    //     id: id,
    //     transDescription: description,
    //     transAmount: amount,
    //   },
    // });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h1>AddTrans</h1>
        {/* Description div */}
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between py-2">
            <label htmlFor="description">Enter Description</label>
            <input
              type="text"
              placeholder="Enter description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </div>

          {/* Amount div */}

          <div className="d-flex justify-content-between py-2">
            <label htmlFor="amount">Enter Amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
