import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About</h2>
        <p>I am a passionate frontend developer specializing in creating clean, responsive web interfaces. With a focus on modern technologies and user experience, I strive to build applications that are both functional and visually appealing. I am always eager to learn new skills and tackle challenging projects.</p>
        <div className="tech-stack">
          <span className="tech-item">React</span>
          <span className="tech-item">JavaScript</span>
          <span className="tech-item">HTML</span>
          <span className="tech-item">CSS</span>
          <span className="tech-item">Git</span>
          <span className="tech-item">GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default About;
