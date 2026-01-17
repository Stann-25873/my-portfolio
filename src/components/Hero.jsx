import React from "react"
import "./Hero.css"
import profile from "../assets/profile.jpeg"

const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Ayamine Ikam Gaba Stann</h1>
          <h2>Frontend Developer | React</h2>
          <p>
            I build clean and responsive web interfaces focused on clarity,
            performance, and user experience.
          </p>
          <button className="hero-button" onClick={scrollToProjects}>
            View Projects
          </button>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Ayamine Ikam Gaba Stann" />
        </div>
      </div>
    </section>
  )
}

export default Hero
