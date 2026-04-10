/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"


const services = [
  { title: 'API REST (Spring Boot)', desc: "Développement d'APIs robustes et scalables avec Spring Boot.", icon: '☕' },
  { title: 'Architecture MVC/DAO', desc: "Design d'architectures propres et maintenables.", icon: '⚙️' },
  { title: 'UI/UX (React/Tailwind)', desc: "Interfaces modernes et responsives avec React.", icon: '🎨' },
  { title: 'Systèmes de Gestion', desc: "Applications de gestion complètes backend/frontend.", icon: '📊' },
]

const Services = () => {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-black font-[Poppins] text-[#0A0A1B] mb-6">
            Mes Services
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer p-8 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-[#E63946]/10 border border-white/50 hover:border-[#E63946]/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E63946] to-transparent" />
              
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0A0A1B] mb-4 group-hover:text-[#E63946] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[#0A0A1B]/70 leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <div className="inline-flex items-center gap-2 text-[#E63946] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                En savoir plus →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

