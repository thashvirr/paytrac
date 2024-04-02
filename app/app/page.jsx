"use client";
import Expenses from "@/components/Expenses";
import Income from "@/components/Income";
import NetIncome from "@/components/NetIncome";
import {
  fetchAllExpenses,
  fetchAllIncome,
  fetchProfitLoss,
} from "@/lib/supabaseUtils";
import { useEffect, useState } from "react";

export default function Home() {
  const [profitloss, setProfitLoss] = useState([]);
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
      </div>
    </div>
  );
}
