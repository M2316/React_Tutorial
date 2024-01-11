import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
export default function Expenses(props) {
  const expenses = props.items;

  const [filterdYear, setFilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);

    console.log("Expenses.js");
    console.log(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    console.log(
      "test : " + expense.date.getFullYear().toString() + " === " + filterdYear
    );
    return expense.date.getFullYear().toString() === filterdYear;
  });





  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
