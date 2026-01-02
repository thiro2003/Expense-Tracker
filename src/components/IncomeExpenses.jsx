import React, { useContext } from "react";
import GlobalContext from "../context/GlobalState";
export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => Number(transaction.amount));

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => acc + amount, 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => acc + amount, 0);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
         <p className="money minus">${Math.abs(expense)}</p>

        </div>
      </div>
    </>
  );
}
