import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>Get in touch with me</p>
        <div className="contact-info">
          <a href="mailto:stanikam2@gmail.com" className="contact-link">stanikam2@gmail.com</a>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Ayamine Ikam. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
