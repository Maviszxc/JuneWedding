/*
  # Update RSVP System Tables

  1. Changes
    - Ensure table exists with correct column names
    - Safely enable RLS
    - Safely create policies if they don't exist
*/

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  attending boolean NOT NULL,
  dietary_restrictions text,
  plus_one boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Safely create policies
DO $$ 
BEGIN
  -- Check if insert policy exists before creating
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'rsvps' 
    AND policyname = 'Enable insert access for all users'
  ) THEN
    CREATE POLICY "Enable insert access for all users" ON rsvps
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  -- Check if select policy exists before creating
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'rsvps' 
    AND policyname = 'Enable read access for authenticated users only'
  ) THEN
    CREATE POLICY "Enable read access for authenticated users only" ON rsvps
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;