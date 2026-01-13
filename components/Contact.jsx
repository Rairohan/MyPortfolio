import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/mykkyekp",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      alert("Thank you for the message! I'll get back to you soon !");
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact">
    <main className="contact-section">
      <h1>Get In Touch</h1>
      <p>
        I'm always interested in new opportunities and interesting projects.
        Let's discuss how we can work together!
      </p>

      <div className="contact-content">
        <form
          onSubmit={handleSubmit}
          className="message-form"
        >
          <label>
            Email
            <input type="email" name="email" required placeholder="Email" />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message"
            ></textarea>
          </label>

          <button type="submit">Send</button>
        </form>

        <div className="social-links">
          <h2>Reach Out on Socials ?</h2>
          <a href="https://github.com/Rairohan" target="_blank" rel="noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rai-rohan/" target="_blank" rel="noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </main>
    </section>
  );
}
