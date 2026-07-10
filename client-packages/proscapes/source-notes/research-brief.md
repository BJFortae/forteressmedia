# Research Brief

## Industry Context

ProScapes should be treated primarily as a commercial grounds maintenance and snow removal business, not a generic residential lawn-care company. Public search results and the current website point to facility maintenance, commercial landscaping, lawn care, irrigation, snow removal, land clearing, and property maintenance services in the Twin Cities.

Commercial buyers likely include property managers, HOA managers, retail/industrial site operators, municipal buyers, and facilities teams. Their decision is trust-heavy: reliability, responsiveness, communication, insurance/credentials, service coverage, and risk reduction matter more than decorative landscaping language.

## Visitor Intent

Primary visitor goals:
- Confirm ProScapes can maintain a commercial property reliably.
- Find snow removal and ice management help before or during winter events.
- Request a quote or start a vendor conversation.
- Validate experience, credentials, service area, and responsiveness.
- Access the client portal if already a customer.
- Find careers if applying for field roles.

Secondary visitor goals:
- Explore residential hardscape/softscape projects.
- Understand process and project capabilities.

## Competitor Patterns

Observed competitor and industry patterns:
- KG Landscape leads with clear service categories and "Get a Quote."
- Midwest Landscapes positions around commercial landscape expertise and long operating history.
- Field Outdoor Spaces uses specific project categories and "Schedule a Consult."
- Industry guides emphasize mobile-first design, authentic photography, thorough service pages, easy contact paths, testimonials/case studies, and local SEO.
- Commercial landscaping guidance stresses that property managers do research and revisit vendor sites, so proof and clarity matter.

## Current Site UX Issues

- Current mobile hero text clips horizontally.
- SSL/certificate verification failed in Python fetch, which may create trust or crawler issues.
- The home hero is visually dated and does not immediately communicate commercial reliability.
- "Get Started" is generic; commercial buyers would respond better to "Request Maintenance Quote" or "Talk to Commercial Services."
- Important proof points are present but under-leveraged: since 1958, 24/7/365 response, communication software, memberships/associations, client portal.
- Commercial and residential paths are mixed in navigation.

## Conversion Goal

Primary conversion:
- Request a commercial maintenance quote.

Secondary conversions:
- Call ProScapes.
- Emergency snow/ice response inquiry.
- Client portal access.
- Residential project inquiry.

## Design Direction For Dez

Design should feel modern, grounded, and operationally reliable. Avoid a luxury garden aesthetic as the primary direction. ProScapes needs to look like the company a property manager can trust before a snow event or for a year-round maintenance contract.

Prioritize:
- Mobile-first layout.
- Clear commercial positioning above the fold.
- Strong CTAs: "Request Commercial Quote" and "Snow & Ice Services."
- Proof strip: Since 1958, 24/7/365, client portal, association memberships.
- Service cards organized by buyer need.
- Real field/project photography.
- Professional green/charcoal/white palette, with restrained use of bright lawn green.

## Stack / Implementation Direction For Dev

This first prototype can be plain HTML/CSS/JS because it is a static homepage concept and should be easy to host, inspect, and share.

If ProScapes became a paying client, stack decision should depend on maintenance ownership:
- Plain static site is enough if Brenden manages updates and the site is mostly brochure/contact.
- WordPress may be appropriate if the client wants to edit pages directly.
- Next.js + Tailwind is justified if we build a reusable client-pitch system, multiple service pages, structured content, before/after galleries, or repeated components across many prototypes.

Must include:
- Responsive/mobile-first CSS.
- No-index metadata for preview.
- Accessible form labels.
- Fast image loading and compressed assets before production.
- Simple form destination placeholder until client chooses hosting/forms.

## Open Questions

- Who is the decision-maker contact?
- Are they primarily pursuing commercial maintenance, snow removal, residential design/build, or all three?
- Do they have better original photography than the current site assets?
- Do they want client portal prominence preserved in the header?

