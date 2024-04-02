import SingleIncome from "./SingleIncome";
import { fetchAllIncome } from "@/lib/supabaseUtils";
import { useEffect, useState } from "react";

export default function Income({ total_income }) {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeData = await fetchAllIncome();
        setIncome(incomeData);
      } catch (error) {
        console.log("Error fetching data: ", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h3>Gross Income</h3>
        <h3>R{total_income}</h3>
      </div>
      <div>
        {income.map((income) => (
          <SingleIncome
            key={income.id}
            source={income.source}
            amount={income.amount}
          />
        ))}
      </div>
    </div>
  );
}
