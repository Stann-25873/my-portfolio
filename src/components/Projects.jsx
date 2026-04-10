/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const projects = [
  {
    title: "MedConnect-V3",
    description: "Plateforme complète de gestion médicale pour patients, docteurs et rendez-vous. Architecture fullstack moderne optimisée pour les workflows santé au Rwanda.",
    tech: ["Java Spring Boot", "MySQL", "REST API", "React"],
    github: "https://github.com/Stann-25873/MedConnect",
    color: "from-[#E63946] via-red-500 to-orange-500",
  },
  {
    title: "Church Management System",
    description: "Système de gestion d'église complet avec membres, événements, dons et administration. Backend robuste + interface intuitive pour les communautés.",
    tech: ["Spring Boot", "PostgreSQL", "JWT Auth", "React Admin"],
    github: "https://github.com/Stann-25873/Church-Management-System",
    color: "from-[#E63946] to-red-600",
  },
  {
    title: "Student Management System",
    description: "Application desktop Java pour gestion étudiants/cours/inscriptions avec CRUD complet et contrôle d'accès rôles.",
    tech: ["Java Swing", "JDBC", "MySQL"],
    github: "https://github.com/Stann-25873/Modern-Student-Management-Reporting-System-Distributed-Architecture-",
    color: "from-gray-400 to-gray-600",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-32 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black font-[Poppins] bg-gradient-to-r from-[#0A0A1B] to-[#E63946]/70 bg-clip-text text-transparent mb-6">
            Réalisations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] to-red-600 mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden hover:-translate-y-3 border border-white/50 hover:border-red-500/20 transition-all duration-500 cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0A0A1B] mb-4 group-hover:text-[#E63946] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-[#0A0A1B]/70 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-red-50 text-[#E63946] text-xs font-semibold rounded-full border border-red-100">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#E63946] to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111 .793-.261 .793-.577v-2.234c-3.338 .726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745 .083-.729 .083-.729 1.205 .084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 .997 .107-.775 .418-1.305 .762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311 .469-2.381 1.236-3.221-.124-.303-.535-1.524 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653 .242 2.874 .118 3.176 .77 .84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .192 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Voir le code
                  </a>
                  <button className="px-5 py-3 text-[#E63946] font-semibold border-2 border-red-200 hover:bg-red-50 rounded-2xl hover:shadow-md transition-all duration-300">
                    Laissez une ⭐ si vous aimez !
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/Stann-25873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0A0A1B] hover:bg-[#E63946] text-white hover:text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-500/25 hover:-translate-y-2 transition-all duration-500"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111 .793-.261 .793-.577v-2.234c-3.338 .726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745 .083-.729 .083-.729 1.205 .084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 .997 .107-.775 .418-1.305 .762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311 .469-2.381 1.236-3.221-.124-.303-.535-1.524 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653 .242 2.874 .118 3.176 .77 .84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .192 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Voir tous les projets
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

