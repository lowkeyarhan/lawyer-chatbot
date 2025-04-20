import { useState } from "react";

function UseCasesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const useCases = [
    {
      icon: "Q",
      title: "Prompts for injury lawyers",
      description:
        "Optimize workflows with a huge amount of Prompts for personal injury lawyers.",
    },
    {
      icon: "📄",
      title: "Shareholders' Agreement",
      description:
        "Ask the robot to create shareholder contract draft specifying rights and responsibilities",
    },
    {
      icon: "📝",
      title: "Create company policy",
      description:
        "Have it create company policy documents covering harassment, privacy, conflicts.",
    },
    {
      icon: "👨‍💼",
      title: "Legal research simplified",
      description:
        "Ask about laws in a particular country or jurisdiction and receive a summary report.",
    },
  ];

  return (
    <section className="section" id="use-cases">
      <div className="container">
        <div className="section-header text-center" data-animate="fade-up">
          <span className="badge">Use Cases</span>
          <h2>Want more use cases?</h2>
          <p className="section-subtitle">
            See how we expand our capabilities to meet all your scenarios.
          </p>
        </div>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div
              className={`use-case-card ${
                hoveredCard === index ? "hovered" : ""
              }`}
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              data-animate="fade-up"
              data-delay={`${index * 100}`}
            >
              <div className="use-case-icon">{useCase.icon}</div>
              <h3 className="use-case-title">{useCase.title}</h3>
              <p className="use-case-description">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
