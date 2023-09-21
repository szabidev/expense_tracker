import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isClicked, setIsClicked] = useState(false);

  const saveExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    console.log(expenseData);
  };

  const addExpense = () => {
    setIsClicked(true);
  };
  const cancelExpense = () => {
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {isClicked ? (
        <ExpenseForm
          onCancel={cancelExpense}
          onSaveExpenseData={saveExpenseData}
        />
      ) : (
        <button onClick={addExpense}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
