/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-28 px-6 overflow-hidden relative">
      {/* Red blob decorative */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blob" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <div className="inline-flex px-4 py-2 bg-white/80 border border-[#0A0A1B]/20 rounded-full shadow-sm mb-6 backdrop-blur-sm">
            <span className="text-[#0A0A1B] font-medium text-sm tracking-wide">Hello 👋</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-[Poppins] leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0A0A1B] to-[#E63946]/70">
            Je suis Ayamine <span className="red-gradient-text">Ikam</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A1B] mb-8 font-[Inter]">
            Architecte Backend & Développeur Fullstack
          </h2>
          
          <p className="text-lg md:text-xl text-[#0A0A1B]/80 max-w-lg mb-12 leading-relaxed font-medium">
            Basé au Rwanda, je construis des systèmes backend robustes et des applications fullstack innovantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E63946] hover:bg-[#c8102e] text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-w-[200px] justify-center"
            >
              Mes services ↗
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/250723672942"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0A0A1B] hover:bg-[#0A0A1B] hover:text-white text-[#0A0A1B] font-semibold text-lg rounded-full hover:shadow-xl hover:shadow-[#0A0A1B]/25 transition-all duration-300 min-w-[200px] justify-center"
            >
              Me contacter
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="justify-self-center md:justify-self-end"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#E63946]/20 to-transparent rounded-3xl blur-xl -z-10 group-hover:scale-105 transition-all duration-500" />
            <img
              src="/profile.png"
              alt="Ayamine Ikam"
              className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl object-cover shadow-2xl border-4 border-white/50 ring-4 ring-transparent group-hover:ring-[#E63946]/30 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[#0A0A1B]/60 hover:text-[#E63946] transition-colors">
          <span className="text-xs font-medium tracking-wide uppercase">Scroll</span>
          <div className="w-10 h-10 border border-[#0A0A1B]/30 rounded-full flex items-center justify-center p-2">
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero

