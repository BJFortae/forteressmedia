import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "Website builds",
    desc: "Blank page to launch, designed and live.",
  },
  {
    title: "Website refreshes",
    desc: "Modernization and UX for aging sites.",
  },
  {
    title: "App creation",
    desc: "Tools and web apps that earn their keep.",
  },
  {
    title: "SEO optimization",
    desc: "Technical SEO and local search.",
  },
  {
    title: "Media strategy",
    desc: "Presence, content, channels — a real plan.",
  },
  {
    title: "AI & workflows",
    desc: "AI implementation where it pays off.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
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
            AI-first media consulting for small businesses. Websites, apps,
            SEO, and strategy — delivered by someone who&apos;s done it
            before, without the agency markup.
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
          <div className="section-title">Services</div>
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
          <div className="section-title">Recent work</div>
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
