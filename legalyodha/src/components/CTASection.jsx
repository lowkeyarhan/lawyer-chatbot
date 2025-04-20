import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content text-center" data-animate="fade-up">
          <span className="badge">Get Started</span>
          <h2>LegalYodha protects your rights and wallet</h2>
          <div className="cta-features">
            <div className="cta-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Free trial</span>
            </div>
            <div className="cta-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="16 12 12 8 8 12"></polyline>
                <line x1="12" y1="16" x2="12" y2="8"></line>
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="cta-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              <span>Money back guarantee</span>
            </div>
          </div>
          <Link to="/chat" className="btn btn-primary btn-lg">
            Try for free
          </Link>
        </div>
      </div>

      <div className="cta-shape">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#paint0_linear_cta)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_cta"
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
    </section>
  );
}

export default CTASection;
