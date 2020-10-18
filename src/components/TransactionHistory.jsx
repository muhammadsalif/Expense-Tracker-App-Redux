import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TransactionHistory = () => {
  let history = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-12">
        <h1>TransactionHistory</h1>
        <ul>
          {history.map((obj, ind) => (
            <li className="d-flex justify-content-around  " key={ind}>
              <span>
                <h3
                  className={`text-capitalize  ${
                    obj.transAmount > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {obj.transDescription}
                </h3>
              </span>
              <span>
                <h3
                  className={`text-capitalize  ${
                    obj.transAmount > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  ${obj.transAmount}
                </h3>
              </span>
              <span>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DEL_TRANSACTION",
                      payload: {
                        id: obj.id,
                      },
                    });
                  }}
                  className="btn btn-danger"
                >
                  X
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
