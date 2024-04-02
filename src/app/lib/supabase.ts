import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Access environment variables
const supabaseUrl: string =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://rzgbwqjifakgujvnbqst.supabase.co";
const supabaseKey: string =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6Z2J3cWppZmFrZ3Vqdm5icXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MDc3NzYsImV4cCI6MjAyMjE4Mzc3Nn0.aTwG7mZIHqYb3iWHeG37FH8okrwYKORCLi7Uxz0jrDQ";

// Ensure that Supabase URL and key are provided
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is missing.");
}

// Create Supabase client instance
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
