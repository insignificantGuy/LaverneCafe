import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiClock, FiPhone, FiWifi, FiCheckCircle } from 'react-icons/fi'
import { MdOutlineAccessible, MdOutlineDeliveryDining } from 'react-icons/md'

const amenities = [
  { icon: FiWifi, label: 'Free Wi-Fi' },
  { icon: MdOutlineAccessible, label: 'Wheelchair Accessible' },
  { icon: MdOutlineDeliveryDining, label: 'Delivery Available' },
  { icon: FiCheckCircle, label: 'Halal Certified' },
]

export default function Location() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-primary-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-4">
            Find Laverne
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[4/3] lg:aspect-auto lg:min-h-[450px] overflow-hidden border border-cream/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2!2d54.3773!3d24.4879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6651e0000001%3A0x1234567890abcdef!2sWorld%20Trade%20Center%20Souk%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.7) brightness(0.8) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laverne Café location map"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <FiMapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">Address</h3>
                  <p className="text-cream/50 leading-relaxed">
                    Ground Floor, World Trade Center Souk
                    <br />
                    (The Mall WTC), Khalifa Bin Zayed The First Street
                    <br />
                    Abu Dhabi, UAE
                  </p>
                  <p className="text-cream/30 text-sm mt-2">
                    Mall parking available
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <FiClock className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">
                    Operating Hours
                  </h3>
                  <p className="text-cream/50">
                    Sunday &ndash; Saturday
                  </p>
                  <p className="text-gold text-lg font-serif">
                    7:00 AM &mdash; 1:00 AM
                  </p>
                  <p className="text-cream/30 text-sm mt-1">Open 7 days a week</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <FiPhone className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:+97125636216"
                    className="text-cream/50 hover:text-gold transition-colors text-lg"
                  >
                    +971 2 563 6216
                  </a>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-cream/5">
                {amenities.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 text-cream/40"
                  >
                    <a.icon className="w-4 h-4 text-gold/60" />
                    <span className="text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
