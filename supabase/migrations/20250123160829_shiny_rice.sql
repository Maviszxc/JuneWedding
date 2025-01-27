/*
  # Create RSVP System Tables

  1. New Tables
    - `rsvps`
      - `id` (uuid, primary key)
      - `firstName` (text)
      - `lastName` (text)
      - `email` (text)
      - `attending` (boolean)
      - `dietaryRestrictions` (text)
      - `plusOne` (boolean)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `rsvps` table
    - Add policies for:
      - Anyone can insert (for RSVP submissions)
      - Only authenticated users can read (for admin dashboard)
*/

CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  firstName text NOT NULL,
  lastName text NOT NULL,
  email text NOT NULL,
  attending boolean NOT NULL,
  dietaryRestrictions text,
  plusOne boolean DEFAULT false,
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