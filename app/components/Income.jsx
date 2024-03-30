import React from "react";
import SingleIncome from "./SingleIncome";

export default function Income() {
  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h3>Gross Income</h3>
        <h3>R300</h3>
      </div>
      <div>
        <SingleIncome />
        <SingleIncome />
        <SingleIncome />
      </div>
    </div>
  );
}
