"use client";
import { useState } from "react";
import { addIncome } from "@/lib/supabaseUtils";

export default function AddIncome({ userId }) {
  const [formData, setFormData] = useState({ user: userId });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setResponse("");
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, data, error } = await addIncome(formData);
    if (success) {
      setResponse("Added Successfully!");
      console.log(response);
    } else {
      setResponse("Something went wrong.");
      console.log(response);
    }
  };

  return (
    <div className="p-4 border border-gray-300 shadow-lg rounded-md bg-white">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
        <h3>Income</h3>
        <input
          type="text"
          id="source"
          className="w-full"
          placeholder="Source"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          className="w-full"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="number"
          id="amount"
          className="w-full"
          placeholder="Amount"
          required
          onChange={handleChange}
        />
        <button type="submit" className="mt-2 btn-blue">
          Add Income
        </button>
      </form>
    </div>
  );
}
