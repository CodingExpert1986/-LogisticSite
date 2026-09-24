-- Run this script in the Supabase SQL Editor.
-- After creating an auth user, set its app_metadata role to "admin"
-- using a trusted server-side process before granting dashboard write access.

create table if not exists public.shipments (
  id uuid primary key default gen_random_uuid(),
  tracking_id text not null unique,
  customer_name text not null default '',
  origin text not null default '',
  destination text not null default '',
  status text not null default 'In Transit',
  current_location text not null default '',
  eta date,
  cargo_type text not null default '',
  weight_kg numeric(12, 2) not null default 0 check (weight_kg >= 0),
  notes text not null default '',
  timeline jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.shipments
  add column if not exists timeline jsonb not null default '[]'::jsonb;

create index if not exists shipments_tracking_id_idx
  on public.shipments (tracking_id);

create or replace function public.set_shipments_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists shipments_set_updated_at on public.shipments;
create trigger shipments_set_updated_at
before update on public.shipments
for each row execute function public.set_shipments_updated_at();

alter table public.shipments enable row level security;

drop policy if exists "Anyone can track shipments" on public.shipments;
create policy "Anyone can track shipments"
on public.shipments
for select
to anon, authenticated
using (true);

drop policy if exists "Admins can create shipments" on public.shipments;
create policy "Admins can create shipments"
on public.shipments
for insert
to authenticated
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can update shipments" on public.shipments;
create policy "Admins can update shipments"
on public.shipments
for update
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Admins can delete shipments" on public.shipments;
create policy "Admins can delete shipments"
on public.shipments
for delete
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
