export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__badge">
          <span className="dot" />
          Powered by KDE Plasma &amp; KasmVNC
        </div>

        <h1>
          A full Linux desktop,
          <br />
          <span className="gradient-text">right in your browser</span>
        </h1>

        <p className="hero__subtitle">
          Codespaces Desktop spins up a complete KDE Plasma environment in a Docker
          container — Firefox, Chrome, LibreOffice, and more, accessible from any
          modern browser on port 3000.
        </p>

        <div className="hero__actions">
          <a href="#get-started" className="btn btn--primary">
            Quick Start
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#features" className="btn btn--ghost">Explore Features</a>
        </div>

        <div className="hero__preview">
          <img
            src="https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Linux desktop environment with code on screen"
            loading="eager"
          />
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-value">5+</div>
            <div className="hero__stat-label">Pre-installed Apps</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">1</div>
            <div className="hero__stat-label">Docker Command</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">3000</div>
            <div className="hero__stat-label">Browser Port</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">100%</div>
            <div className="hero__stat-label">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
