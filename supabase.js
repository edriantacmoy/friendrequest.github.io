// supabase.js
const SUPABASE_URL = "https://unjqvkbhrxpuszwrpkah.supabase.co"; // replace
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuanF2a2JocnhwdXN6d3Jwa2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTQxODAsImV4cCI6MjA4ODI5MDE4MH0.Tw0e_0Baxm6QlncOlldJE9iB8H1EPzrfGpvjZsBjW8Y"; // replace

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
