const About = () => {
  const highlights = [
    { label: "Nationality", value: "Gabonese" },
    { label: "Location", value: "Kigali, Rwanda" },
    { label: "Focus", value: "Backend Development" },
    { label: "Primary Language", value: "Java" },
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-1/2 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I am a backend developer with strong knowledge in{" "}
              <span className="text-indigo-400 font-medium">Java</span> and{" "}
              <span className="text-indigo-400 font-medium">Spring Boot</span>.
              I enjoy building systems, APIs, and management applications that
              solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am very curious — I like learning new technologies,
              cybersecurity, system architecture, and software engineering. My
              goal is to continuously grow and contribute to meaningful projects
              that push boundaries.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am open to opportunities, collaborations, and challenging
              projects that help me grow as a developer. Whether it's building
              robust APIs, architecting database systems, or exploring
              cybersecurity, I'm always ready to learn and build.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-indigo-400 text-xs font-medium tracking-wider uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-white font-semibold text-sm">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
