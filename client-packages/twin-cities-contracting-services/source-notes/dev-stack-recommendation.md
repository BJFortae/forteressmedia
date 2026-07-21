# Dev Stack Recommendation

## Recommendation

Use plain static HTML, CSS, and a small JavaScript file for the first concept pass.

## Why

- The scope is a homepage modernization concept, not a full production migration.
- Static files are easy to inspect, screenshot, copy into ForteressMedia preview hosting, and revise quickly.
- The business likely needs a straightforward brochure site with strong phone/form conversion.
- If the client says yes, the same prototype can become the basis for a production static site or be ported into the ForteressMedia preview route shape.

## Production Path If Client Says Yes

1. Confirm service claims, warranty/licensing language, preferred contact destination, and form routing.
2. Convert demo form into a live form using the chosen host/form provider.
3. Preserve local SEO structure: title, meta description, schema, service pages, and service-area pages.
4. Keep the existing site live until replacement is staged and approved.
5. Add analytics/call tracking only with client approval.

## SEO Notes

- Do not discard the current site's SEO depth. The current page has service-area pages, FAQ content, and structured data.
- A production rebuild should preserve or redirect existing URLs.
- Homepage copy should balance conversion with "Bloomington roofing contractor" relevance.
- Add `RoofingContractor` schema in production after verifying final business data.

## Performance Notes

- Use optimized WebP/JPEG assets.
- Avoid heavy page builders and unused JS in the concept.
- Keep CSS local and minimal.
- Use intrinsic image dimensions and stable aspect ratios to avoid layout shift.

## Accessibility Notes

- Text contrast must work over imagery.
- CTAs should be keyboard focusable and clearly labeled.
- Form fields need labels.
- Button text should fit on mobile.
- Sticky mobile actions should not cover form controls.

## Build Checklist

- Static prototype in `prototype/index.html`, `styles.css`, and `script.js`.
- Use public assets from `assets/original/`.
- Add `meta name="robots" content="noindex,nofollow"`.
- Mark form as demo-only and keep submit disabled/non-sending.
- Capture current and prototype desktop/mobile screenshots.
- Populate pitch brief, outreach email, call script, and UX scorecard.
