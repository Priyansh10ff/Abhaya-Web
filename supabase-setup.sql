-- Run this in: Supabase → SQL Editor → New Query

-- Waitlist table
create table waitlist (
  id           uuid primary key default gen_random_uuid(),
  email        text unique not null,
  source       text,
  signed_up_at timestamptz default now()
);

alter table waitlist enable row level security;

-- Only server (service_role) can insert and read
-- No public access at all — all via your API route
create policy "service insert" on waitlist
  for insert to service_role with check (true);

create policy "service select" on waitlist
  for select to service_role using (true);

-- Survey responses table (from the survey page)
create table survey_responses (
  id            uuid primary key default gen_random_uuid(),
  submitted_at  timestamptz default now(),
  age           text,
  location      text,
  felt_unsafe   text,
  knows_rights  text,
  features      text[],
  barrier       text,
  platform      text,
  would_share   text,
  open_text     text
);

alter table survey_responses enable row level security;

create policy "anon insert surveys" on survey_responses
  for insert to anon with check (true);

create policy "service select surveys" on survey_responses
  for select to service_role using (true);
