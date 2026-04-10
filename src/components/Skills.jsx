/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"


const skills = [
  { name: "Java", level: 95, icon: "☕" },
  { name: "Spring Boot", level: 85, icon: "🍃" },
  { name: "MySQL/PostgreSQL", level: 80, icon: "🗄️" },
  { name: "REST APIs", level: 90, icon: "🔗" },
  { name: "React", level: 70, icon: "⚛️" },
  { name: "Docker", level: 65, icon: "🐳" },
  { name: "Linux", level: 75, icon: "🐧" },
  { name: "Git", level: 90, icon: "🐙" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black font-[Poppins] bg-gradient-to-r from-[#0A0A1B] to-[#E63946]/70 -webkit-bg-clip-text bg-clip-text text-transparent mb-6">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-[#0A0A1B] flex items-center gap-3 group-hover:text-[#E63946] transition-colors">
                    {skill.icon} {skill.name}
                  </span>
                  <span className="text-lg font-bold text-[#E63946]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-2xl overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#E63946] to-red-600 rounded-2xl shadow-sm"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#0A0A1B] mb-10 font-[Poppins]">
              Outils & Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["IntelliJ IDEA", "VS Code", "Postman", "Docker", "GitHub", "AWS", "Linux", "Kali Linux"].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group px-6 py-4 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/20 border border-gray-100 hover:-translate-y-1 transition-all duration-400 flex items-center gap-4 text-lg font-semibold text-[#0A0A1B]"
                >
                  <div className="w-2 h-12 bg-gradient-to-b from-[#E63946] rounded-full group-hover:scale-[1.2] transition-transform" />
                  <span>{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

