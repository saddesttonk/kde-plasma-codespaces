export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="5" fill="var(--primary-600)" />
              <rect x="4" y="5" width="16" height="11" rx="1.5" fill="white" opacity="0.95" />
              <rect x="6" y="7" width="5" height="2" rx="0.5" fill="var(--primary-600)" />
              <rect x="6" y="10.5" width="8" height="1" rx="0.5" fill="#94a3b8" />
            </svg>
            Codespaces Desktop
          </div>
          <div className="footer__links">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#apps">Apps</a>
            <a href="#get-started">Get Started</a>
          </div>
        </div>
        <div className="footer__copy">
          Built with KDE Plasma, KasmVNC, and Docker. Open source under the LinuxServer framework.
        </div>
      </div>
    </footer>
  );
}
