/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"


const About = () => {
  const highlights = [
    { label: "Nationalité", value: "Gabonais" },
    { label: "Localisation", value: "Kigali, Rwanda" },
    { label: "Focus", value: "Backend Engineering" },
    { label: "Langage Principal", value: "Java" },
  ]

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black font-[Poppins] text-[#0A0A1B] mb-6">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-[#0A0A1B]/80 leading-relaxed font-medium">
              Software Engineer spécialisé Backend basé au Rwanda. Passionné par la construction de systèmes scalables, APIs performantes et applications de gestion.
            </p>
            <p className="text-lg text-[#0A0A1B]/70 leading-relaxed">
              Curieux et autodidacte, j&apos;explore continuellement les technologies backend (Java, Spring Boot), DevOps et cybersécurité. 
              Mon objectif : contribuer à des projets impactants qui repoussent les limites techniques.
            </p>
            <p className="text-lg text-[#0A0A1B]/70 leading-relaxed">
              Ouvert aux opportunités internationales, collaborations et challenges techniques. 
              Contactez-moi pour bâtir l&apos;avenir ensemble !
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-red-500/10 border border-white/50 hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500 cursor-default"
              >
                <p className="text-[#E63946] text-sm font-bold uppercase tracking-wide mb-3 group-hover:scale-105 transition-transform">
                  {item.label}
                </p>
                <p className="text-2xl font-black text-[#0A0A1B] group-hover:text-[#E63946] transition-colors">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

