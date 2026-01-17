import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.css"

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
  viewport: { once: true }
}

export default function App() {
  return (
    <>
      <Navbar />
      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div {...fadeInUp}>
        <About />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Projects />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Contact />
      </motion.div>
    </>
  )
}
