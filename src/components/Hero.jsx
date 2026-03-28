import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/50 to-primary-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
            Specialty Coffee & Dining
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6"
        >
          Laverne
          <span className="block text-gold italic font-medium text-4xl sm:text-5xl lg:text-6xl mt-2">
            Café
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-cream/60 text-lg sm:text-xl font-light tracking-wide mb-2"
        >
          EVERY SIP HAS A BEAT
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-gold/80 text-2xl mb-12"
        >
          ـ&#9825;&#1640;&#64937;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group bg-gold hover:bg-gold-light text-primary-dark px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 min-w-[200px]"
          >
            View Menu
          </a>
          <a
            href="#location"
            className="group border border-cream/30 hover:border-gold text-cream/80 hover:text-gold px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 min-w-[200px]"
          >
            Find Us
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
