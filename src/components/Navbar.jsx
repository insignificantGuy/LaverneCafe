import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold group-hover:text-gold-light transition-colors">
                Laverne
              </span>
              <span className="font-serif text-lg sm:text-xl text-cream/60 font-light">
                Café
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cream/70 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://laverne.eazyfnb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-primary-dark px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300"
              >
                Order Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-cream/70 hover:text-gold transition-colors p-2"
              aria-label="Open menu"
            >
              <HiMenuAlt3 size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-dark/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-cream/70 hover:text-gold transition-colors p-2"
              aria-label="Close menu"
            >
              <HiX size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-serif text-3xl text-cream/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://laverne.eazyfnb.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-4 bg-gold text-primary-dark px-8 py-3 font-serif text-xl tracking-wider transition-all duration-300"
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
