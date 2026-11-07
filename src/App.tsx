import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Apps from "./components/Apps";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <a href="#" className="navbar__brand">
            <span className="navbar__logo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="var(--primary-600)" />
                <rect x="4" y="5" width="16" height="11" rx="1.5" fill="white" opacity="0.95" />
                <rect x="6" y="7" width="5" height="2" rx="0.5" fill="var(--primary-600)" />
                <rect x="6" y="10.5" width="8" height="1" rx="0.5" fill="#94a3b8" />
                <rect x="6" y="12.5" width="6" height="1" rx="0.5" fill="#94a3b8" />
                <rect x="9" y="17.5" width="6" height="1.5" rx="0.75" fill="white" opacity="0.9" />
              </svg>
            </span>
            <span className="navbar__title">Codespaces Desktop</span>
          </a>
          <div className="navbar__links">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#apps">Included Apps</a>
          </div>
          <a href="#get-started" className="navbar__cta">Get Started</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Apps />
      </main>

      <Footer />
    </div>
  );
}
