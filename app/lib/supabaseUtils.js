import { supabase } from "@/app/createClient";

export async function fetchAllIncome() {
  const { data, error } = await supabase.from("income").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function fetchAllExpenses() {
  const { data, error } = await supabase.from("expenses").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function fetchProfitLoss(userId) {
  const { data, error } = await supabase
    .from("profit_loss")
    .select("*")
    .eq("user", userId);
  if (error) {
    throw error;
  }
  return data;
}

export async function addIncome(formData) {
  try {
    const { data, error } = await supabase.from("income").insert([formData]);
    if (error) {
      throw error;
    }
    console.log("Income added successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error adding income:", error.message);
    return { success: false, error };
  }
}

export async function addExpense(formData) {
  try {
    const { data, error } = await supabase.from("expenses").insert([formData]);
    if (error) {
      throw error;
    }
    console.log("Expense added successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error adding expense:", error.message);
    return { success: false, error };
  }
}
