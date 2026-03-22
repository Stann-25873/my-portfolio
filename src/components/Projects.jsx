import { motion } from "framer-motion"

const projects = [
  {
    title: "MedConnect",
    description:
      "A medical management web application for managing patients, doctors, and appointments. Built with modern frontend and backend architecture for healthcare workflow optimization.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Clinic Appointment & Patient Management",
    description:
      "Full-stack Spring Boot application with JPA/MySQL database relationships, appointment booking, patient management, and admin system for clinic operations.",
    tech: ["Spring Boot", "JPA", "MySQL", "Thymeleaf"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Student/Course/Enrollment Management System",
    description:
      "Java desktop application with login system, dashboard, JTable management, full CRUD operations, and role-based access control for educational institutions.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Cybersecurity Projects",
    description:
      "DVWA exploitation project using Kali Linux and Vulnserver buffer overflow exploitation using Immunity Debugger. Practical ethical hacking and vulnerability assessment.",
    tech: ["Kali Linux", "DVWA", "Immunity Debugger", "Python"],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Linux Administration Practice",
    description:
      "Hands-on Linux system administration including user management, file permissions, shell scripting, and system configuration on various distributions.",
    tech: ["Linux", "Bash", "Shell Scripting", "Networking"],
    color: "from-green-500 to-emerald-500",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-2">
            What I've built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Gradient top bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Stann-25873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-indigo-500/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <svg
              className="w-5 h-5 group-hover:text-indigo-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
