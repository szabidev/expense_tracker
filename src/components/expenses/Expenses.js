import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../newexpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [yearSelected, setYearSelected] = useState("2019");

  const handleFilter = (year) => {
    setYearSelected(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDateString = expense.date.getFullYear().toString();

    return expenseDateString === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={handleFilter} year={yearSelected} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
