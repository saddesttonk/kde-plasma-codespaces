const steps = [
  {
    n: "1",
    title: "Build the Image",
    desc: "Run the included install script or build the Dockerfile directly. It pulls KDE Plasma, Firefox, Chrome, and the full app suite.",
  },
  {
    n: "2",
    title: "Launch the Container",
    desc: "Start the container with port 3000 mapped and a volume mounted to /config for persistence across restarts.",
  },
  {
    n: "3",
    title: "Open in Browser",
    desc: "Navigate to localhost:3000 and your KDE Plasma desktop loads instantly — no client software required.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section__header">
          <div className="section__tag">How It Works</div>
          <h2 className="section__title">Up and running in three steps</h2>
          <p className="section__desc">
            From Docker image to a live desktop session in your browser — no complex setup.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-box" id="get-started">
          <h3>Ready to launch?</h3>
          <p>Clone the repo and run the installer — it builds and starts everything for you.</p>
          <div className="cta-box__code">
            <div><span className="comment"># Build the image &amp; start the container</span></div>
            <div><span className="cmd">chmod</span> +x install.sh &amp;&amp; ./install.sh</div>
            <div>&nbsp;</div>
            <div><span className="comment"># Or build manually</span></div>
            <div><span className="cmd">docker</span> build . <span className="flag">-t</span> codespacesdesktop</div>
            <div><span className="cmd">docker</span> run <span className="flag">-d</span> <span className="flag">-p</span> 3000:3000 <span className="flag">--shm-size</span>=2gb codespacesdesktop</div>
          </div>
          <div className="hero__actions">
            <a href="#" className="btn btn--primary">
              View on GitHub
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
