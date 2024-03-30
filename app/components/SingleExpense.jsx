import React from "react";

export default function SingleExpense() {
  return (
    <div className="rounded-lg border p-2 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-red-600 rounded-full p-1 text-white">i</div>
        <p>Title</p>
      </div>
      <div className="">
        <p className="font-bold">R100.00</p>
      </div>
    </div>
  );
}
