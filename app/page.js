import ContactForm from "../components/ContactForm";

const siteUrl = "https://forteressmedia.com";
const contactEmail = "contact@forteressmedia.com";
const businessPhone = "+16124701881";

const services = [
  {
    title: "Website builds",
    desc: "Blank page to launch for small business websites, campaign sites, service pages, and modern marketing websites.",
  },
  {
    title: "Website refreshes",
    desc: "Modernization, UX cleanup, messaging, performance, and conversion improvements for aging websites.",
  },
  {
    title: "App creation",
    desc: "Custom web apps, internal tools, prototypes, and practical software that earns its keep.",
  },
  {
    title: "SEO optimization",
    desc: "Technical SEO, local search readiness, metadata, structured content, and discoverability improvements.",
  },
  {
    title: "Media strategy",
    desc: "Presence, content, channel strategy, launch planning, and a real plan for showing up online.",
  },
  {
    title: "AI & workflows",
    desc: "AI implementation, workflow automation, and business process improvements where they actually pay off.",
  },
];

const faqs = [
  {
    question: "What does Forteress Media help with?",
    answer:
      "Forteress Media helps small businesses build and improve websites, web apps, SEO foundations, media strategy, and AI-enabled workflows.",
  },
  {
    question: "Where is Forteress Media based?",
    answer:
      "Forteress Media is based in Minneapolis, Minnesota and works with businesses that need practical digital strategy and implementation.",
  },
  {
    question: "Can Forteress Media rebuild an existing website?",
    answer:
      "Yes. Forteress Media can refresh an existing website, clarify the messaging, improve the user experience, strengthen SEO, and launch a cleaner version.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Forteress Media",
      url: siteUrl,
      email: contactEmail,
      telephone: businessPhone,
      image: `${siteUrl}/opengraph-image`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Website builds",
        "Website refreshes",
        "App creation",
        "SEO optimization",
        "Media strategy",
        "AI workflow consulting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Forteress Media",
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Forteress Media | Website, App & Media Consulting",
      description:
        "Media consulting for small businesses. Websites, apps, SEO, media strategy, and workflow implementation.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      primaryImageOfPage: `${siteUrl}/opengraph-image`,
      inLanguage: "en-US",
    },
    {
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/#services`,
      name: "Forteress Media services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
          provider: { "@id": `${siteUrl}/#business` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav className="nav" aria-label="Primary navigation">
        <div className="nav-brand">Forteress Media</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="btn-nav">
            Start a project →
          </a>
        </div>
      </nav>

      <header className="hero">
        <h1>
          Build.
          <br />
          Rebuild.
          <br />
          <span className="accent">Refresh.</span>
        </h1>
        <div className="hero-row">
          <p className="hero-sub">
            Media consulting for small businesses. Websites, apps,
            SEO, strategy, and AI implementation — delivered by someone who&apos;s done it before, without the agency markup.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
            <a href="#work" className="btn-outline">
              The work
            </a>
          </div>
        </div>
      </header>

      <section id="services" className="services">
        <div className="section-bar">
          <h2 className="section-title">Services</h2>
          <div className="section-note">
            Full service or one-time handoff — you own the files either way.
          </div>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service" key={s.title}>
              <span className="service-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="work">
        <div className="section-bar">
          <h2 className="section-title">Recent work</h2>
        </div>
        <div className="work-grid">
          <div className="project">
            <div className="project-tile" style={{ background: "#fff" }}>
              <img
                src="/grabthetab-logo.svg"
                alt="GrabTheTab logo"
                style={{
                  height: 88,
                  width: "min(78%, 420px)",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="project-meta">
              <div>
                <h3>GrabTheTab</h3>
                <p>App Build - Bill Sharing</p>
              </div>
              <a
                className="project-link"
                href="https://grabthetab.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                grabthetab.app →
              </a>
            </div>
          </div>
          <div className="project">
            <div
              className="project-tile"
              style={{ background: "var(--klaus-blue)" }}
            >
              <img
                src="https://klaus4ward3.com/assets/logo-bird-white-transparent.png"
                alt="Klaus for Council bird mark"
                style={{ height: 48, objectFit: "contain" }}
              />
              <div
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                }}
              >
                Klaus4Ward3.com
              </div>
            </div>
            <div className="project-meta">
              <div>
                <h3>Klaus for Council</h3>
                <p>Campaign site — Ward 3, Robbinsdale</p>
              </div>
              <a
                className="project-link"
                href="https://klaus4ward3.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                klaus4ward3.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-bar">
          <h2 className="section-title">Common questions</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-grid">
          <div>
            <h2>
              Let&apos;s
              <br />
              talk.
            </h2>
            <div className="contact-direct">
              <div className="contact-direct-label">Direct</div>
              <a href="mailto:contact@forteressmedia.com">
                contact@forteressmedia.com
              </a>
              <a href="tel:+16124701881">(612) 470-1881</a>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="footer">
          <span>© {new Date().getFullYear()} Forteress Media</span>
          <span>Minneapolis, MN</span>
        </div>
      </section>
    </main>
  );
}
