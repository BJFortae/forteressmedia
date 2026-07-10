# Forteress Media

Single-page consulting site for Forteress Media. Next.js (App Router) + Resend contact form.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form (Resend)

1. Create an API key at https://resend.com/api-keys
2. Put it in `.env.local` as `RESEND_API_KEY`
3. `CONTACT_FROM_EMAIL` must be a verified sender in Resend — `onboarding@resend.dev` works for testing; switch to your own verified domain for production.
4. Submissions are emailed to `CONTACT_TO_EMAIL` (default: contact@fortressmedia.com).

## Notes

- Project logos are hot-linked from grabthetab.app and klaus4ward3.com. To make them local, download the images into `public/` and update the `src` in `app/page.js`.
- Deploys cleanly to Vercel — remember to set the env vars in the dashboard.
