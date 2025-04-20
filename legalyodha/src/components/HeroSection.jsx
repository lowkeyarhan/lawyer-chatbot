import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content" data-animate="fade-up">
          <span className="badge">AI-Powered Legal Assistant</span>
          <h1 className="hero-title">
            Your Personal{" "}
            <span className="text-gradient">AI Legal Assistant</span>
          </h1>
          <p className="hero-subtitle">
            Say goodbye to expensive legal consultation, long waits for
            appointments, and confusing legal texts. LegalYodha provides
            instant, accurate legal guidance at your fingertips.
          </p>
          <div className="hero-cta">
            <Link to="/chat" className="btn btn-primary btn-lg">
              Try for free
            </Link>
            <a href="#features" className="btn btn-secondary btn-lg">
              Learn more
            </a>
          </div>

          <div className="hero-partners">
            <span className="hero-partners-label">Trusted by</span>
            <div className="partner-logos">
              <div className="partner-logo">
                <div className="partner-nvidia">NVIDIA</div>
                <span>Inception program</span>
              </div>
              <div className="partner-logo">
                <div className="partner-google">Google</div>
                <span>For Startups</span>
              </div>
              <div className="partner-logo">
                <div className="partner-producthunt">Product hunt</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-image animate-float"
          data-animate="fade-left"
          data-delay="300"
        >
          <div className="hero-image-3d">
            <div className="hero-device-frame">
              <div className="hero-device-content">
                <div className="device-header">
                  <div className="device-user">Hello, Chris! 👋</div>
                </div>
                <div className="device-prompt">
                  Please select a question from the "Prompts" library below or
                  write your own question.
                </div>
                <div className="device-message-box">
                  <span>What are my rights as an employer in NYC?</span>
                  <button className="device-send-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-device-shadow"></div>
            <div className="hero-device-glow"></div>
          </div>
        </div>
      </div>

      <div className="hero-shape">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="720"
              y1="128"
              x2="720"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--accent-primary)" stopOpacity="0.1" />
              <stop
                offset="1"
                stopColor="var(--accent-primary)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-bg-elements">
        <div className="hero-bg-circle hero-bg-circle-1"></div>
        <div className="hero-bg-circle hero-bg-circle-2"></div>
        <div className="hero-bg-circle hero-bg-circle-3"></div>
      </div>
    </section>
  );
}

export default HeroSection;
