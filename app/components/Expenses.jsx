import SingleExpense from "./SingleExpense";
import { fetchAllExpenses } from "@/lib/supabaseUtils";
import { useEffect, useState } from "react";

export default function Expenses({ total_expenses }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expenseData = await fetchAllExpenses();
        setExpenses(expenseData);
      } catch (error) {
        console.log("Error fetching data: ", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h3>Total Expenses</h3>
        <h3>R {total_expenses}</h3>
      </div>
      <div>
        {expenses.map((expense) => (
          <SingleExpense
            key={expense.id}
            expense={expense.expense}
            amount={expense.amount}
          />
        ))}
      </div>
    </div>
  );
}
