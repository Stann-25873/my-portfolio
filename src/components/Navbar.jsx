import { useState } from "react"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 bg-[#0A0A1B]/95 backdrop-blur-md rounded-full shadow-2xl border border-white/10 max-w-4xl mx-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#E63946] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <svg className="w-5 h-5 text-white/80 hover:text-[#E63946] hover:scale-110 transition-all cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 10a6 6 0 10-12.676 0 6 6 0 0012.676 0zM15.106 6a3 3 0 11-5.356 0 3 3 0 015.356 0zm-1.5 4.5a2.5 2.5 0 11-4.5 2.236v-.486a2.5 2.5 0 114.5 0v.486z" clipRule="evenodd" />
          </svg>
          <svg className="w-5 h-5 text-white/80 hover:text-[#E63946] hover:scale-110 transition-all cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.79-.26.79-.57v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78 .42-1.31 .77-1.61-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3 .4 1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23 .65 1.65 .24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37 .82 1.1 .82 2.22v3.29c0 .32.19.7.8.58 4.77-1.59 8.2-6.09 8.2-11.39 0-6.63-5.37-12-12-12z"/>
          </svg>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5"
          aria-label="Toggle menu"
        >
          <svg className={`w-6 h-6 text-white transition-all duration-300 ${mobileOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <ul className="flex flex-col gap-3 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 mt-2 border-t border-white/10">
              <div className="flex gap-6 p-2">
                <svg className="w-6 h-6 text-white/80 hover:text-[#E63946] cursor-pointer transition-all hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 10a6 6 0 10-12.676 0 6 6 0 0012.676 0zM15.106 6a3 3 0 11-5.356 0 3 3 0 015.356 0zm-1.5 4.5a2.5 2.5 0 11-4.5 2.236v-.486a2.5 2.5 0 114.5 0v.486z" clipRule="evenodd" />
                </svg>
                <svg className="w-6 h-6 text-white/80 hover:text-[#E63946] cursor-pointer transition-all hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39 .6 .11 .79-.26 .79-.57v-2.23c-3.34 .73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75 .08-.73 .08-.73 1.21 .09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78 .42-1.31 .77-1.61-2.67-.3-5.48-1.33-5.48-5.93 0-1.31 .47-2.38 1.24-3.22-.12-.3-.54-1.52 .12-3.18 0 0 1.01-.32 3.3 1.23 .96-.27 1.98-.4 3 .4 1.02 .01 2.05 .14 3.01 .4 2.29-1.55 3.3-1.23 3.3-1.23 .65 1.65 .24 2.88 .12 3.18 .77 .84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92 .43 .37 .82 1.1 .82 2.22v3.29c0 .32 .19 .7 .8 .58 4.77-1.59 8.2-6.09 8.2-11.39 0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

