# LogisticSite

A React and Vite logistics website with public shipment tracking and an authenticated operations dashboard.

## Local development

```bash
npm install
npm run dev
```

Without Supabase environment variables, the app runs in demo mode. The demo admin account is:

- Email: `admin@logistic.com`
- Password: `admin123`

Do not use the demo account in production.

## Freelance review checklist

For a quick portfolio demonstration, deploy the app without Supabase environment variables. The built-in demo data will remain available and reviewers can test:

1. Open `/track-cargo` and search for `TRACK001`, `CARGO2024`, or `LOG0099`.
2. Open `/admin` and sign in with `admin@logistic.com` and `admin123`.
3. Create a shipment, edit it, delete it, then search for it on the tracking page.
4. Refresh the browser to confirm demo shipment changes persist in local storage.
5. Test an invalid tracking ID and invalid login to see the error states.

For a client handoff, configure Supabase instead of publishing the demo credentials. Send reviewers the deployed URL and a short test account or arrange a live walkthrough; never publish a Supabase service-role key.

## Supabase setup

1. Create a Supabase project and enable Email authentication.
2. Copy `.env.example` to `.env` and add the project URL and anon key.
3. Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL Editor.
4. Create an admin user in Supabase Authentication.
5. Add the admin role to that user in the SQL Editor, replacing the email:

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
  || '{"role":"admin"}'::jsonb
where email = 'admin@example.com';
```

Sign out and sign in again after changing the role so the new JWT contains the claim. The RLS policies allow public shipment lookup, but only users with `app_metadata.role = 'admin'` can create, update, or delete shipments.

Customers can open `/track-cargo`, enter a shipment tracking ID, and view its origin, destination, current location, status, ETA, cargo type, weight, customer name, notes, and timeline. Tracking IDs are case-insensitive. The public tracking policy is suitable only for information you are comfortable exposing to anyone who knows a tracking ID; do not store private customer or commercial information in the publicly selected shipment columns.

Never put a Supabase service-role key in this frontend project. Only the public anon key belongs in `VITE_SUPABASE_ANON_KEY`.

## Environment variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Production build

```bash
npm run build
```
