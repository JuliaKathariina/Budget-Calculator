import "./App.css";
import React from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFrom from "./components/ExpenseFrom";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from "uuid";
const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: " credit card bill", amount: 1200 },
];
console.log(initialExpenses);
function App() {
  return (
    <>
      <Alert></Alert>
      <ExpenseFrom />
      <ExpenseList />
    </>
  );
}

export default App;
