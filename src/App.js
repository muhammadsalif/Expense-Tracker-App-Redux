import React from "react";
import "./App.css";
import Title from './components/Title';
import Balance from "./components/Balance";
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';
import { Provider } from "react-redux";
import { store } from "./store/Store";


function App() {
  return (
    <div className="container border  d-flex justify-content-center align-items-center flex-column"> 
    <Provider store={store}>
    <Title></Title>
    <Balance></Balance>
    <IncomeExpense></IncomeExpense>
    <TransactionHistory></TransactionHistory>
    <AddTransaction></AddTransaction>
    </Provider >
    </div>
  );
}

export default App;
