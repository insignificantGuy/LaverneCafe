import { motion } from 'framer-motion'
import { IoLogoWhatsapp } from 'react-icons/io5'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/97125636216?text=Hi%20Laverne%20Caf%C3%A9!%20I%27d%20like%20to%20make%20an%20inquiry."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <IoLogoWhatsapp className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 bg-primary-dark/90 backdrop-blur-sm text-cream text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-cream/10 pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  )
}
