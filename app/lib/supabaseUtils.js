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
