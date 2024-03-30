import React from "react";
import SingleExpense from "./SingleExpense";

export default function Expenses() {
  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h3>Total Expenses</h3>
        <h3>R300</h3>
      </div>
      <div>
        <SingleExpense />
        <SingleExpense />
        <SingleExpense />
      </div>
    </div>
  );
}
