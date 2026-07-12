# Dev Stack Recommendation

## Prototype Stack

Use plain HTML, CSS, and a small amount of vanilla JavaScript for the ProScapes homepage prototype.

Why:
- The immediate deliverable is a static homepage concept, not a full CMS or app.
- It needs to be fast to build, easy to inspect, and simple to share with Brenden, Dez, and a prospect.
- The main risk is messaging, layout, trust proof, and conversion clarity, not framework complexity.
- Static files are enough for the key prototype features: responsive hero, service sections, proof strip, CTA links, placeholder form, and no-index preview metadata.

Recommended prototype structure:
- `index.html`
- `styles.css`
- `script.js` only if needed for mobile nav, form placeholder behavior, or small UI interactions
- Local compressed image assets copied into an `assets/` folder

## Production Options

### Plain HTML/CSS/JS

Best if:
- The final site is brochure-style with a small number of mostly static pages.
- Brenden or another technical owner will handle updates.
- The client mainly needs credibility, clear service pages, local SEO, and quote capture.

Likely pages:
- Home
- Commercial Maintenance
- Snow & Ice
- Landscaping / Irrigation
- Residential Projects
- Careers
- Contact

### Next.js + Tailwind

Best if:
- We want reusable components across many small-business redesign prototypes.
- ProScapes needs many service/location pages, structured content, before/after galleries, or richer interactive sections.
- We want stronger control over image optimization, routing, metadata, reusable layouts, and future integrations.

Use Tailwind only if it speeds implementation and matches the broader prototype system. Avoid adding it just for a single static homepage.

### WordPress

Best if:
- ProScapes wants to edit pages, staff bios, job posts, services, or blog/news content themselves.
- Their team already knows WordPress or has a vendor who maintains it.
- The business values CMS familiarity over a lighter custom build.

If WordPress is selected, keep the theme restrained and performance-focused. Avoid plugin-heavy form, gallery, and SEO stacks unless they solve a real operating need.

## Hosting And Forms

Prototype hosting:
- Static preview on Netlify, Vercel, Cloudflare Pages, GitHub Pages, or local file preview.
- Include `noindex, nofollow` metadata for any public preview.
- Use placeholder form handling until a production destination is chosen.

Production hosting:
- Static site: Netlify, Cloudflare Pages, or Vercel.
- Next.js: Vercel or Cloudflare Pages/Workers, depending on build needs.
- WordPress: managed WordPress host with SSL, backups, updates, and plugin monitoring.

Forms:
- Prototype: non-submitting form or test endpoint clearly marked as placeholder.
- Production static/Next.js: Netlify Forms, Formspree, Basin, HubSpot, or a lightweight serverless endpoint.
- Production WordPress: Gravity Forms, WPForms, or HubSpot embed if the client already uses CRM.

Form requirements:
- Separate primary commercial quote path from emergency snow/ice inquiry.
- Include phone CTA for urgent snow response.
- Add spam protection before production.
- Confirm lead delivery destination, autoresponder copy, and privacy/disclaimer needs.

## SEO, Performance, And Accessibility

SEO:
- Fix SSL/certificate issues before launch.
- Use service-specific title tags and meta descriptions.
- Add local business schema where appropriate.
- Make commercial maintenance and snow/ice pages distinct for search intent.
- Preserve or redirect important existing URLs if replacing the current site.
- Include service area language for Twin Cities/Eagan/Minnesota searches.

Performance:
- Compress and resize photography before production.
- Use modern image formats where possible.
- Lazy-load below-the-fold images.
- Keep CSS and JavaScript minimal for the prototype.
- Avoid heavy sliders, animation libraries, and plugin bloat.

Accessibility:
- Mobile-first responsive layout with no horizontal clipping.
- Semantic headings and landmarks.
- Accessible labels for all form fields.
- Visible focus states.
- Sufficient color contrast for green/charcoal/white palette.
- Buttons and nav targets sized for touch.
- Do not rely on image text for critical claims or CTAs.

## Decision Criteria

Choose plain HTML/CSS when:
- The goal is a fast homepage prototype or small brochure site.
- Content updates are infrequent.
- There are no complex integrations.
- The priority is low cost, speed, and easy handoff.

Choose Next.js + Tailwind when:
- We need reusable components for multiple client packages.
- The site will grow into many pages, galleries, or structured content blocks.
- We need more control over metadata, routing, image optimization, and deployment workflow.
- Brenden/team will maintain the site technically.

Choose WordPress when:
- The client needs direct non-technical editing.
- Careers, blog/news, galleries, or service pages will change often.
- The client already has WordPress expectations, hosting, or vendor support.

Default recommendation for the current ProScapes homepage prototype: plain HTML/CSS/JS. Re-evaluate only after the prototype proves the commercial-maintenance positioning and the client confirms who will own ongoing updates.
