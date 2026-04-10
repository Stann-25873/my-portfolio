/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A1B]">
      <Navbar />
      <Hero />
      <motion.div {...sectionVariants}>
        <About />
      </motion.div>
      <motion.div {...sectionVariants}>
        <Services />
      </motion.div>
      <motion.div {...sectionVariants}>
        <Skills />
      </motion.div>
      <motion.div {...sectionVariants}>
        <Projects />
      </motion.div>
      <motion.div {...sectionVariants}>
        <Contact />
      </motion.div>
      <Footer />
    </div>
  )
}

