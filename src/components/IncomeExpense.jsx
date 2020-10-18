import React from "react";
import { useSelector } from "react-redux";

const IncomeExpense = () => {
  let val = useSelector((state) => state);

  let income = val.filter((obj) => obj.transAmount > 0);
  let sumOfIncome = income.reduce(
    (initialVal, currentVal) => initialVal + +currentVal.transAmount,
    0
  );

  // Expense
  let expense = val.filter((obj) => obj.transAmount < 0);
  let sumOfExpense = expense.reduce(
    (initialVal, currentVal) => initialVal + +currentVal.transAmount,
    0
  );

  return (
    <div className="row">
      <div className="col-6">Income ${sumOfIncome}</div>
      <div className="col-6">Expense ${sumOfExpense}</div>
    </div>
  );
};

export default IncomeExpense;
