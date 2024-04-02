import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://fzxuqynycnazgdlbpdht.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6eHVxeW55Y25hemdkbGJwZGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MjQzNzAsImV4cCI6MjAyNzIwMDM3MH0.POjv1EetugUBOpF3MESI0CQ0aCEqZMpDmT4H5nCtkSs"
);
