import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function OrderOnline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,110,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,169,110,0.04)_0%,transparent_50%)]" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Craving Laverne?
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-4">
            Order Online
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto mb-10">
            Enjoy your favourite Laverne dishes and drinks from the comfort of
            your home. Order directly or through your preferred delivery platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://laverne.eazyfnb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-primary-dark px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 min-w-[220px]"
          >
            Order Now
          </a>
          <a
            href="https://www.deliveroo.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/20 text-cream/70 hover:border-[#00ccbc] hover:text-[#00ccbc] px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 min-w-[220px]"
          >
            Deliveroo
          </a>
          <a
            href="https://www.talabat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/20 text-cream/70 hover:border-[#ff5a00] hover:text-[#ff5a00] px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 min-w-[220px]"
          >
            Talabat
          </a>
        </motion.div>

        {/* Services tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {['Dine-in', 'Takeaway', 'Delivery', 'Outdoor Seating'].map((s) => (
            <span
              key={s}
              className="text-xs tracking-widest uppercase text-cream/30 border border-cream/10 px-4 py-1.5"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
