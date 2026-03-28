import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiInstagram } from 'react-icons/fi'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: 'Latte art close-up',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    alt: 'Cafe interior warm lighting',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    alt: 'Plated pancakes with berries',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Elegant dinner setting',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: 'Coffee being poured',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
    alt: 'Dessert pastries display',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=600&q=80',
    alt: 'Outdoor cafe seating',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=600&q=80',
    alt: 'Matcha latte art',
    span: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Visual Stories
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-4">
            The Gallery
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            A curated collection of moments — the artistry, the ambience, the
            flavours that define Laverne.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px] sm:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`${img.span} overflow-hidden group relative`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-all duration-500 flex items-center justify-center">
                <FiInstagram className="text-cream/0 group-hover:text-cream/80 text-2xl transition-all duration-500 group-hover:scale-100 scale-75" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/lavernecafe971"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-300 group"
          >
            <FiInstagram className="text-xl group-hover:scale-110 transition-transform" />
            <span className="text-sm tracking-widest uppercase">
              Follow @lavernecafe971
            </span>
            <span className="text-cream/30 text-xs">18K+ followers</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
