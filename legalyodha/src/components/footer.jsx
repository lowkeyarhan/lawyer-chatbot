import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "company") {
      setCompanyOpen(!companyOpen);
      setFaqOpen(false);
      setTermsOpen(false);
    } else if (dropdown === "faq") {
      setFaqOpen(!faqOpen);
      setCompanyOpen(false);
      setTermsOpen(false);
    } else if (dropdown === "terms") {
      setTermsOpen(!termsOpen);
      setCompanyOpen(false);
      setFaqOpen(false);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <svg
              className="footer-logo-icon"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="#7C3AED" />
              <path
                d="M10 10H22V12H21V22H23V24H9V22H11V12H10V10ZM13 12V22H19V12H13ZM14 14H18V15H14V14ZM14 17H18V18H14V17Z"
                fill="white"
              />
            </svg>
            <span className="footer-logo-text">legalyodha</span>
          </div>

          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 8v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8"></path>
                <path d="M14 4v8"></path>
                <path d="M10 12h8"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Pinterest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 11.8l4 4L20 8"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-links-group">
            <div className="footer-links-title">Other pages</div>
            <div className="footer-links-items">
              <Link to="#">Affiliate</Link>
              <div className={`footer-dropdown ${companyOpen ? "open" : ""}`}>
                <div
                  className="footer-dropdown-header"
                  onClick={() => toggleDropdown("company")}
                >
                  <span>Company</span>
                  <svg
                    className="dropdown-arrow"
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="footer-dropdown-content">
                  <Link to="#">About Us</Link>
                  <Link to="#">Careers</Link>
                  <Link to="#">Contact</Link>
                </div>
              </div>
              <div className={`footer-dropdown ${faqOpen ? "open" : ""}`}>
                <div
                  className="footer-dropdown-header"
                  onClick={() => toggleDropdown("faq")}
                >
                  <span>FAQ & Features</span>
                  <svg
                    className="dropdown-arrow"
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="footer-dropdown-content">
                  <Link to="#">FAQ</Link>
                  <Link to="#">Features</Link>
                  <Link to="#">Pricing</Link>
                </div>
              </div>
              <div className={`footer-dropdown ${termsOpen ? "open" : ""}`}>
                <div
                  className="footer-dropdown-header"
                  onClick={() => toggleDropdown("terms")}
                >
                  <span>Terms & Privacy</span>
                  <svg
                    className="dropdown-arrow"
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="footer-dropdown-content">
                  <Link to="#">Terms of Service</Link>
                  <Link to="#">Privacy Policy</Link>
                  <Link to="#">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            ©{new Date().getFullYear()} LegalYodha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
