import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiInstagram, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-primary-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            Have a question, want to book a table, or just want to say hello?
            We&rsquo;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-primary/30 border border-gold/20 p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-gold/30 rounded-full flex items-center justify-center">
                  <FiSend className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-cream mb-2">
                  Message Sent
                </h3>
                <p className="text-cream/50">
                  Thank you for reaching out. We&rsquo;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gold text-sm tracking-wider uppercase hover:text-gold-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-cream/40 text-xs tracking-widest uppercase mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-primary/30 border border-cream/10 focus:border-gold/50 text-cream px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-cream/40 text-xs tracking-widest uppercase mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-primary/30 border border-cream/10 focus:border-gold/50 text-cream px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-cream/40 text-xs tracking-widest uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-primary/30 border border-cream/10 focus:border-gold/50 text-cream px-4 py-3 text-sm outline-none transition-colors duration-300 resize-none placeholder:text-cream/20"
                    placeholder="Your message or reservation inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-primary-dark py-3.5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl text-cream mb-6">
                Reach Out Directly
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+97125636216"
                  className="flex items-center gap-4 text-cream/60 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 border border-cream/10 group-hover:border-gold/30 flex items-center justify-center transition-colors">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/30 tracking-wider uppercase">
                      Phone
                    </p>
                    <p className="text-lg">+971 2 563 6216</p>
                  </div>
                </a>

                <a
                  href="mailto:lavernecafe@gmail.com"
                  className="flex items-center gap-4 text-cream/60 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 border border-cream/10 group-hover:border-gold/30 flex items-center justify-center transition-colors">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/30 tracking-wider uppercase">
                      Email
                    </p>
                    <p className="text-lg">lavernecafe@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/lavernecafe971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-cream/60 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 border border-cream/10 group-hover:border-gold/30 flex items-center justify-center transition-colors">
                    <FiInstagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/30 tracking-wider uppercase">
                      Instagram
                    </p>
                    <p className="text-lg">@lavernecafe971</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Reservation note */}
            <div className="bg-primary/30 border border-gold/10 p-6">
              <h4 className="font-serif text-lg text-gold mb-2">
                Table Reservations
              </h4>
              <p className="text-cream/40 text-sm leading-relaxed">
                For reservations, please call us directly or send a message via
                WhatsApp. We recommend booking in advance for weekends and
                special occasions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
