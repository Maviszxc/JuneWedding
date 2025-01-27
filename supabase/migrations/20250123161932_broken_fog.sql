/*
  # Fix RSVP table columns

  1. Changes
    - Drop existing rsvps table to ensure clean slate
    - Recreate table with correct column names
    - Re-enable RLS and policies
*/

-- Drop existing table and its policies
DROP TABLE IF EXISTS rsvps;

-- Create the table with correct column names
CREATE TABLE rsvps (
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

-- Create policies
CREATE POLICY "Enable insert access for all users" ON rsvps
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users only" ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);