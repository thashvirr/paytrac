"use client";
import Expenses from "@/components/Expenses";
import AddExpense from "@/components/Forms/AddExpense";
import AddIncome from "@/components/Forms/AddIncome";
import Income from "@/components/Income";
import NetIncome from "@/components/NetIncome";
import { fetchProfitLoss } from "@/lib/supabaseUtils";
import { useEffect, useState } from "react";

export default function Home() {
  const [profitloss, setProfitLoss] = useState([]);
  const [addExpenseVisible, setAddExpenseVisibility] = useState("hidden");
  const [addIncomeVisible, setAddIncomeVisibility] = useState("hidden");
  console.log(profitloss);

  const userId = "d18aab7f-5c1e-45ad-b02d-b4bb48bee6a2";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfitLoss(userId);
        setProfitLoss(data);
      } catch (error) {
        console.log("Error fetching data: ", error.message);
      }
    };
    fetchData();
  }, []);

  const setFormVisibility = () => {
    if (addExpenseVisible === "hidden") {
      setAddExpenseVisibility("fixed");
    } else {
      setAddExpenseVisibility("hidden");
    }
  };

  const setFormVisibility2 = () => {
    if (addIncomeVisible === "hidden") {
      setAddIncomeVisibility("fixed");
    } else {
      setAddIncomeVisibility("hidden");
    }
  };
  return (
    <div>
      {/* <h1>Component</h1>
      <h2>Component</h2>
      <h3>Component</h3>
      <h4>Component</h4>
      <h5>Component</h5>
      <p>Component</p> */}
      <div className="flex flex-col gap-4">
        <Income total_income={profitloss[0]?.total_income} />
        <Expenses total_expenses={profitloss[0]?.total_expenses} />
        <NetIncome profit_loss={profitloss[0]?.profit_loss} />
        <div className={`${addExpenseVisible} w-full left-0 top-0`}>
          <AddExpense userId={userId} />
        </div>
        <div className={`${addIncomeVisible} w-full left-0 top-0`}>
          <AddIncome userId={userId} />
        </div>
        <button onClick={setFormVisibility}>Add Expense</button>
        <button onClick={setFormVisibility2}>Add Income</button>
      </div>
    </div>
  );
}
