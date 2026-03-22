import { motion } from "framer-motion"

const skills = [
  { name: "Java", level: 90, icon: "☕" },
  { name: "Spring Boot", level: 80, icon: "🍃" },
  { name: "MySQL", level: 75, icon: "🗄️" },
  { name: "HTML / CSS", level: 80, icon: "🌐" },
  { name: "JavaScript", level: 65, icon: "⚡" },
  { name: "React", level: 45, icon: "⚛️" },
  { name: "Linux", level: 60, icon: "🐧" },
  { name: "Cybersecurity", level: 50, icon: "🔐" },
]

const tools = [
  "Git & GitHub",
  "IntelliJ IDEA",
  "VS Code",
  "Postman",
  "Kali Linux",
  "MySQL Workbench",
  "Immunity Debugger",
  "DVWA",
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-2">
            What I work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-indigo-400 text-xs font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & technologies grid */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg px-4 py-3 text-sm text-gray-300 hover:text-white hover:border-indigo-500/30 transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
