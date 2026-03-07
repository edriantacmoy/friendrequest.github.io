# TODO: Add Supabase Database Integration

## Steps Completed:

- [x] Get Supabase credentials (URL and anon key)
- [x] Create supabase.js client file with credentials
- [x] Update name.html to save user name to Supabase
- [x] Update confirm.html to save response to Supabase

## Final Step:

- [ ] 1. Create database table in Supabase (see SQL below)

## Supabase Credentials:

- URL: https://unjqvkbhrxpuszwrpkah.supabase.co
- Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuanF2a2JocnhwdXN6d3Jwa2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MTQxODAsImV4cCI6MjA4ODI5MDE4MH0.Tw0e_0Baxm6QlncOlldJE9iB8H1EPzrfGpvjZsBjW8Y

---

## SQL TO RUN IN SUPABASE SQL EDITOR:

```sql
-- Create table to store friendship responses
CREATE TABLE friendship_responses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  response TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE friendship_responses ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for your web app)
CREATE POLICY "Allow public inserts" ON friendship_responses
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow public updates (for your web app)
CREATE POLICY "Allow public updates" ON friendship_responses
  FOR UPDATE TO anon
  USING (true);
```
