function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Navigating through legal jargon was a maze until LegalYodha came to the rescue. Now, I get to understand complex terms in simple language, making my life a lot easier.",
      author: "Sarah Mitchell",
      role: "Freelancer",
      avatar: "/avatars/avatar-1.webp",
    },
    {
      content:
        "I've been able to draft consumer complaint letters effortlessly. It's amazing how it simplifies the process and provides a professional touch to all my correspondence.",
      author: "Maria Davis",
      role: "Consumer Rights Advocate",
      avatar: "/avatars/avatar-2.webp",
    },
    {
      content:
        "The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.",
      author: "Elizabeth Martin",
      role: "Litigation Lawyer",
      avatar: "/avatars/avatar-3.webp",
    },
    {
      content:
        "I'm amazed by the instant help it provides. It's like having a legal expert, always willing to help with everything from clarifying a clause to writing a letter of termination.",
      author: "Barbara Smith",
      role: "Entrepreneur",
      avatar: "/avatars/avatar-4.webp",
    },
    {
      content:
        "Being a law student, I constantly find myself buried under piles of case laws and briefs. LegalYodha has been a beacon, assisting me with research and case briefs.",
      author: "Rebecca Adams",
      role: "Law Student",
      avatar: "/avatars/avatar-5.webp",
    },
    {
      content:
        "For me it has streamlined the way I handle research. Its AI-driven assistance in composing documents and analyzing contracts has freed up so much of my time.",
      author: "Timothy Clark",
      role: "Attorney",
      avatar: "/avatars/avatar-6.webp",
    },
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header text-center" data-animate="fade-up">
          <span className="badge">Testimonials</span>
          <h2>What our users think</h2>
          <p className="section-subtitle">
            Find out how our platform has changed the legal services experience
            for diverse users.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial"
              key={index}
              data-animate="fade-up"
              data-delay={`${index * 100}`}
            >
              <div className="testimonial-content">"{testimonial.content}"</div>
              <div className="testimonial-author">
                <img
                  className="testimonial-avatar"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/50";
                  }}
                />
                <div>
                  <div className="testimonial-name">{testimonial.author}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
