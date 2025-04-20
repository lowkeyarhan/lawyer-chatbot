import { useState } from "react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "What is LegalYodha?",
      answer:
        "LegalYodha is a cutting-edge platform that transforms the legal field using artificial intelligence. It automates research, simplifies complex terms, and handles documents efficiently. Ideal for individuals seeking affordable consultation and for professionals and students aiming to streamline their work.",
    },
    {
      question: "Who is your platform for?",
      answer:
        "Our platform is designed for everyone from individual consumers seeking legal help to law professionals, law firms, and law students. Whether you need personal legal advice or are looking to streamline your professional legal work, LegalYodha has features tailored to your needs.",
    },
    {
      question: "What languages does it work for?",
      answer:
        "LegalYodha currently supports English and is optimized for the legal systems of the United States, United Kingdom, Canada, Australia, and India. We're continuously working on expanding our language support and jurisdictional knowledge.",
    },
    {
      question: "How do I start using LegalYodha?",
      answer:
        "Getting started is easy! Simply click on the 'Try for free' button, create an account, and you're ready to go. You can also explore our features and plans before signing up to find the best fit for your needs.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We prioritize your privacy and security. All conversations are encrypted, and we follow strict data protection protocols. Your information is never shared with third parties without your explicit permission, and you maintain complete control over your data.",
    },
    {
      question: "Will AI replace lawyers?",
      answer:
        "No, LegalYodha is designed to be a powerful assistant, not a replacement for legal professionals. Our AI helps streamline routine tasks, provides preliminary guidance, and enhances efficiency, allowing lawyers to focus on the complex aspects of their work that require human judgment and expertise.",
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header text-center" data-animate="fade-up">
          <span className="badge">FAQ</span>
          <h2>Have a question?</h2>
          <p className="section-subtitle">
            Browse through our frequently asked topics.
          </p>
        </div>

        <div className="faq-container" data-animate="fade-up" data-delay="200">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? (
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  ) : (
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
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
