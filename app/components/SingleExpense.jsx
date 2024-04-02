import React from "react";

export default function SingleExpense({ expense, description, amount }) {
  return (
    <div className="rounded-lg border p-2 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-red-600 rounded-full p-1 text-white">i</div>
        <p>{expense}</p>
      </div>
      <div className="">
        <p className="font-bold">R {amount}</p>
      </div>
    </div>
  );
}
