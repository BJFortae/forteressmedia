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
3. For local testing, use `CONTACT_FROM_EMAIL=onboarding@resend.dev`.
4. While using the Resend test sender, `CONTACT_TO_EMAIL` must be the verified email address on your Resend account.
5. For production, verify your sending domain in Resend, then switch `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` to your business-domain addresses.

## Notes

- Project logos are hot-linked from grabthetab.app and klaus4ward3.com. To make them local, download the images into `public/` and update the `src` in `app/page.js`.
- Deploys cleanly to Vercel — remember to set the env vars in the dashboard.
