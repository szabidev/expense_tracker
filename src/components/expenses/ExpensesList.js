import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  return (
    <ul className="expenses-list">
      {items.length === 0 ? (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
      ) : (
        items.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        ))
      )}
    </ul>
  );
};

export default ExpensesList;
