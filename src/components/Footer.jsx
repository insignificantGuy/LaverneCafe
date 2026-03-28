import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi'

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
  { name: 'Order Online', href: 'https://laverne.eazyfnb.com/' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#131f1f] border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold text-gold">
                Laverne
              </span>
              <span className="font-serif text-xl text-cream/40 ml-1">
                Caf&eacute;
              </span>
            </a>
            <p className="text-cream/30 text-sm leading-relaxed mb-4">
              Every sip has a beat. Specialty coffee, tea, and dining in the
              heart of Abu Dhabi.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/lavernecafe971"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream/10 hover:border-gold/30 flex items-center justify-center text-cream/40 hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+97125636216"
                className="w-10 h-10 border border-cream/10 hover:border-gold/30 flex items-center justify-center text-cream/40 hover:text-gold transition-all duration-300"
                aria-label="Phone"
              >
                <FiPhone className="w-5 h-5" />
              </a>
              <a
                href="mailto:lavernecafe@gmail.com"
                className="w-10 h-10 border border-cream/10 hover:border-gold/30 flex items-center justify-center text-cream/40 hover:text-gold transition-all duration-300"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream/50 text-xs tracking-[0.2em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="text-cream/30 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream/50 text-xs tracking-[0.2em] uppercase mb-5">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-cream/30">
                <span>Sunday &ndash; Saturday</span>
              </div>
              <p className="text-gold font-serif text-lg">7:00 AM &mdash; 1:00 AM</p>
              <p className="text-cream/20 text-xs mt-2">Open every day</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-cream/50 text-xs tracking-[0.2em] uppercase mb-5">
              Location
            </h4>
            <p className="text-cream/30 text-sm leading-relaxed">
              Ground Floor
              <br />
              World Trade Center Souk
              <br />
              Khalifa Bin Zayed The First St.
              <br />
              Abu Dhabi, UAE
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-cream/20 text-xs">
            &copy; {new Date().getFullYear()} Laverne Caf&eacute;. All rights reserved.
          </p>
          <p className="text-cream/15 text-xs">
            Abu Dhabi, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  )
}
