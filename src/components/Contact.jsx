/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const Contact = () => {
  const contactItems = [
    {
      icon: "mail",
      label: "Email",
      value: "stannayamineikam@gmail.com",
      href: "mailto:stannayamineikam@gmail.com",
    },
    {
      icon: "phone",
      label: "WhatsApp",
      value: "+250 723 672 942",
      href: "https://wa.me/250723672942",
    },
    {
      icon: "github",
      label: "GitHub",
      value: "@Stann-25873",
      href: "https://github.com/Stann-25873",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "Ayamine Ikam",
      href: "https://www.linkedin.com/in/ayamine-ikam-gaba-stann-589213292/",
    },
    {
      icon: "map-pin",
      label: "Localisation",
      value: "Kigali, Rwanda",
      href: null,
    },
  ]

  const Icon = ({ name, className }) => {
    const icons = {
      mail: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      phone: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      github: <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111 .793-.261 .793-.577v-2.234c-3.338 .726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745 .083-.729 .083-.729 1.205 .084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 .997 .107-.775 .418-1.305 .762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311 .469-2.381 1.236-3.221-.124-.303-.535-1.524 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653 .242 2.874 .118 3.176 .77 .84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .192 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      linkedin: <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a3 3 0 00-2.826 2.826l-.5 1A3 3 0 104.826 7.826l.5-1A3 3 0 008 4zM6.632 7.168a3 3 0 01.826-.826l1 .5A3 3 0 017.168 6.632l-.5 1zM7.832 9.168a3 3 0 01-.826.826l-.5-1A3 3 0 018.168 9.832l.5-1zM8.168 10.832a3 3 0 01.826-.826l1 .5A3 3 0 019.832 11.168l-.5 1zM9.832 12.832a3 3 0 01-.826.826l-.5-1A3 3 0 0110.832 12.168l.5-1zM11.168 13.832a3 3 0 01.826-.826l1 .5A3 3 0 0112.832 14.168l-.5 1zM12.832 15.832a3 3 0 01-.826.826l-.5-1A3 3 0 0113.832 15.168l.5-1zM13.832 16.832a3 3 0 01-.826.826l-.5-1A3 3 0 0114.832 16.168l.5-1zM14.832 17.832a3 3 0 01-.826.826l-.5-1A3 3 0 0115.832 17.168l.5-1zM15.832 18.832a3 3 0 01-.826.826l-.5-1A3 3 0 0116.832 18.168l.5-1zM16.832 19.832a3 3 0 01-.826.826l-.5-1A3 3 0 0117.832 19.168l.5-1z" clipRule="evenodd" /></svg>,
      map_pin: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,
    };
    return icons[name] || null;
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black font-[Poppins] bg-gradient-to-r from-[#0A0A1B] to-[#E63946]/70 bg-clip-text text-transparent mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] mx-auto rounded-full mb-4" />
          <p className="text-xl text-[#0A0A1B]/70 max-w-2xl mx-auto leading-relaxed">
            Ouvert aux opportunités, collaborations et projets challengeants. 
            Contactez-moi, construisons ensemble !
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactItems.map((item, i) => {
            const content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-red-500/15 border border-gray-100 hover:border-red-500/30 hover:-translate-y-3 transition-all duration-500 cursor-pointer h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#E63946]/10 to-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-400 border-2 border-red-200/50 group-hover:border-red-400/70">
                  <Icon name={item.icon} className="text-[#E63946] group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#E63946] mb-2 group-hover:translate-x-2 transition-transform">
                  {item.label}
                </p>
                <p className="text-2xl font-black text-[#0A0A1B] mb-4 group-hover:text-[#E63946] transition-colors">
                  {item.value}
                </p>
              </motion.div>
            )

            return item.href ? (
              <a 
                key={item.label}
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline block"
              >
                {content}
              </a>
            ) : (
              content
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="https://wa.me/250723672942"
            target="_blank"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#E63946] to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-red-500/40 hover:-translate-y-2 transition-all duration-500 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Discuter sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

