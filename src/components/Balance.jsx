import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  let value = useSelector((state) => state);

  let sum = value.reduce(
    (initialVal, currentVal) => initialVal + +currentVal.transAmount,
    0
  );
  return (
    <div className="row ">
      <div className="d-flex justify-content-center align-items-center col-12">
        <h1>Balance</h1>
        <h3 className="ml-2">${sum}</h3>
      </div>
    </div>
  );
};

export default Balance;
