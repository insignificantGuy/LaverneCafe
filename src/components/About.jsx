import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCoffee, FiHeart, FiStar, FiUsers } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCoffee,
    title: 'Specialty Coffee',
    desc: 'Artisan-crafted beverages from carefully sourced beans, brewed with precision and passion.',
  },
  {
    icon: FiStar,
    title: 'Stunning Ambience',
    desc: 'An Instagram-worthy interior designed for beauty, comfort, and unforgettable moments.',
  },
  {
    icon: FiHeart,
    title: 'Made with Love',
    desc: 'Every dish crafted with care — from our signature Spanish Latte to our famous Eggs Benedict.',
  },
  {
    icon: FiUsers,
    title: 'Family Friendly',
    desc: 'A warm, welcoming space for everyone — child-friendly, wheelchair accessible, and inclusive.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-6 leading-tight">
              Where Coffee Meets
              <span className="text-gold italic"> Art</span>
            </h2>
            <div className="space-y-4 text-cream/60 leading-relaxed">
              <p>
                Nestled in the heart of Abu Dhabi&rsquo;s iconic World Trade Center Souk,
                Laverne Caf&eacute; is more than just a coffee shop &mdash; it&rsquo;s an
                experience. We believe that every cup tells a story and every dish
                is a masterpiece.
              </p>
              <p>
                Our passion lies in specialty coffee and tea, meticulously prepared
                to bring out the finest flavours. Paired with our artisan breakfast
                dishes, freshly baked goods, and indulgent desserts, we create
                moments worth savouring.
              </p>
              <p>
                From the first pour of a Spanish Latte to the last bite of our
                signature Eggs Benedict, every detail is crafted with care. Our
                beautiful interiors and warm service make Laverne the perfect
                destination for a morning ritual, a leisurely lunch, or an evening
                escape.
              </p>
            </div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80"
                  alt="Specialty coffee latte art"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                  alt="Laverne cafe interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
                  alt="Beautifully plated breakfast"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80"
                  alt="Warm cafe atmosphere"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why we're loved */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="group bg-primary/40 border border-cream/5 p-6 hover:border-gold/20 transition-all duration-500"
            >
              <item.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-lg text-cream font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
