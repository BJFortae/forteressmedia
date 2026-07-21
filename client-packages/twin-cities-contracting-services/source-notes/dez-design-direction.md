# Dez Design Direction

## Positioning

Twin Cities Contracting Services should feel like a long-standing local roofing company with a cleaner, more decisive mobile experience. The redesign should not chase a luxury remodeler look. It should feel established, direct, and easy to call when a homeowner has a practical roofing need.

## Target Visitor

- Bloomington/Twin Cities homeowner comparing roofing contractors.
- Homeowner with an aging roof, storm concern, leak, or insurance-related question.
- Visitor who wants quick proof that the company is local, experienced, and easy to contact.

## Tone

- Trustworthy, local, experienced.
- Plain-spoken and service-forward.
- Modern without losing the company's existing identity.
- Respectful of the "since 1964" proof point.

## Visual Direction

- Keep the existing blue logo as the brand anchor.
- Pair navy/ink with a warm action color for CTAs so the page does not become a one-note blue site.
- Use roof/project imagery as real proof, not vague stock-style atmosphere.
- Use restrained cards and compact proof bands for scannability.
- Keep corners modest and avoid over-rounded decorative UI.

## Mobile-First Priorities

1. No headline overflow at 390px and below.
2. Phone CTA visible immediately.
3. Secondary "Free roof inspection" CTA near the phone action.
4. Trust proof above or immediately below the first viewport.
5. Services summarized in short cards rather than long SEO blocks.
6. Estimate form low on friction and clearly marked as demo-only in the concept.

## CTA Hierarchy

- Primary: Call `(952) 405-6201`.
- Secondary: Request a free roof inspection.
- Tertiary: Review services / service area.

For mobile, include a sticky bottom action bar with call and inspection actions.

## Sections

1. Header with logo, phone CTA, and compact nav.
2. Hero with direct homeowner promise and two CTAs.
3. Proof strip: since 1964, Bloomington office, residential roofing, free inspections.
4. Services: replacement, installation, inspection, shingle roofing.
5. Why homeowners choose them: quoted price, materials, experience, customer service.
6. Project/gallery proof using existing public site assets.
7. Service area band.
8. Contact/estimate form.

## Risks

- Over-modernizing could make the company feel less local and established.
- Using too much dark navy could make the page feel heavy.
- A long headline would recreate the current mobile problem.
- If "licensed/insured" or warranty claims are not verified, do not invent them.

## Implementation Checklist

- Keep all headings short enough to wrap cleanly.
- Use `overflow-wrap: break-word` and stable responsive layout constraints.
- Test at 390x844 and desktop.
- Preserve the company phone number and local service cues.
- Include a clear private concept disclaimer.
