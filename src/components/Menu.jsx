import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
  {
    name: 'Specialty Coffee',
    items: [
      { name: 'Spanish Latte', desc: 'Signature espresso blended with sweetened condensed milk — rich, creamy, indulgent', price: 25, best: true },
      { name: 'Iced Spanish Latte', desc: 'Our beloved Spanish Latte served over ice — refreshingly smooth', price: 28, best: true },
      { name: 'Coffee Latte', desc: 'Classic espresso with velvety steamed milk and a touch of art', price: 22, best: true },
      { name: 'Matcha Latte', desc: 'Premium ceremonial-grade matcha whisked with steamed milk', price: 26 },
      { name: 'Organic Matcha Lemonade', desc: 'Fresh organic matcha paired with house-made lemonade — crisp and energizing', price: 28 },
      { name: 'Flat White', desc: 'Double ristretto with silky microfoam — pure coffee perfection', price: 22 },
      { name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk, and thick creamy foam', price: 20 },
      { name: 'Americano', desc: 'Bold espresso diluted with hot water for a clean, strong finish', price: 18 },
    ],
  },
  {
    name: 'Specialty Tea',
    items: [
      { name: 'Mixed Berries Iced Tea', desc: 'A refreshing blend of berry infusion served cold with fresh fruits', price: 24 },
      { name: 'Moroccan Mint Tea', desc: 'Traditional gunpowder green tea with fresh mint and a hint of sweetness', price: 20 },
      { name: 'Chamomile Honey', desc: 'Calming chamomile flowers steeped gently with natural honey', price: 18 },
      { name: 'Karak Chai', desc: 'Rich, spiced tea brewed the traditional UAE way with evaporated milk', price: 16 },
    ],
  },
  {
    name: 'Cold Beverages',
    items: [
      { name: 'Strawberry Mojito', desc: 'Muddled strawberries, fresh mint, and lime with sparkling soda', price: 26 },
      { name: 'Classic Mint & Lime Mojito', desc: 'A timeless refresher with muddled mint, lime, and soda', price: 24 },
      { name: 'Passion Fruit Cooler', desc: 'Tropical passion fruit blended with citrus and crushed ice', price: 26 },
      { name: 'Fresh Orange Juice', desc: 'Freshly squeezed, pure, and naturally sweet', price: 22 },
    ],
  },
  {
    name: 'Bubble Tea',
    items: [
      { name: 'Spanish Latte Bubble Tea', desc: 'Our signature Spanish Latte with chewy tapioca pearls — the best of both worlds', price: 30 },
      { name: 'Taro Milk Tea', desc: 'Creamy taro milk tea with tapioca pearls', price: 28 },
      { name: 'Brown Sugar Boba', desc: 'Rich brown sugar milk tea with caramelized boba pearls', price: 28 },
    ],
  },
  {
    name: 'Breakfast',
    items: [
      { name: 'Eggs Benedict — Mushroom & Spinach', desc: 'Poached eggs on toasted English muffin with sautéed mushrooms, spinach, and hollandaise', price: 48 },
      { name: 'Eggs Benedict — Smoked Salmon', desc: 'Poached eggs with premium smoked salmon, capers, and hollandaise on brioche', price: 55 },
      { name: 'Eggs Benedict — Turkey Ham', desc: 'Classic Benedict with halal turkey ham, poached eggs, and hollandaise on brioche', price: 50 },
      { name: 'Açaí Bowl', desc: 'Blended açaí topped with granola, fresh berries, banana, coconut, and honey drizzle', price: 42 },
      { name: 'Avocado Mini Bowl', desc: 'Smashed avocado with cherry tomatoes, feta, seeds, and a poached egg', price: 38, best: true },
      { name: 'Laverne Big Breakfast', desc: 'Eggs your way, turkey sausage, mushrooms, beans, toast, and hash browns', price: 58 },
    ],
  },
  {
    name: 'Sandwiches',
    items: [
      { name: 'Cheese & Turkey Sandwich', desc: 'Sliced turkey, melted cheese, fresh greens on artisan sourdough', price: 38 },
      { name: 'Grilled Halloumi Wrap', desc: 'Golden halloumi with roasted vegetables and garlic yogurt in a warm wrap', price: 36 },
      { name: 'Smoked Salmon Bagel', desc: 'Cream cheese, smoked salmon, capers, and red onion on a toasted bagel', price: 42 },
      { name: 'Club Sandwich', desc: 'Triple-stacked with grilled chicken, turkey, egg, lettuce, and tomato', price: 44 },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Pistachio Kunafa', desc: 'Crispy shredded phyllo with a creamy pistachio filling and rosewater syrup', price: 36 },
      { name: 'Lotus Cheesecake', desc: 'Creamy cheesecake with a Biscoff base and caramelized Lotus spread topping', price: 34 },
      { name: 'Chocolate Fondant', desc: 'Warm chocolate cake with a molten centre, served with vanilla ice cream', price: 38 },
      { name: 'Crème Brûlée', desc: 'Classic French custard with a caramelized sugar crust', price: 32 },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const activeItems = categories.find((c) => c.name === activeCategory)?.items || []

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-primary-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
            Explore Our Offerings
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream font-bold mb-4">
            The Menu
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            From artisan coffees to indulgent breakfasts, every item is crafted
            with care and the finest ingredients.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto gap-2 mb-12 pb-2 scrollbar-hide justify-start lg:justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`whitespace-nowrap px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 border shrink-0 ${
                activeCategory === cat.name
                  ? 'bg-gold text-primary-dark border-gold font-medium'
                  : 'bg-transparent text-cream/60 border-cream/10 hover:border-gold/30 hover:text-cream'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {activeItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-primary/30 border border-cream/5 p-5 hover:border-gold/20 transition-all duration-500 relative"
              >
                {item.best && (
                  <span className="absolute top-3 right-3 text-[10px] tracking-widest uppercase text-gold bg-gold/10 px-2 py-0.5 border border-gold/20">
                    Best Seller
                  </span>
                )}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-cream/40 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-gold font-serif text-lg font-semibold whitespace-nowrap">
                    {item.price} <span className="text-xs text-cream/40">AED</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://laverne.eazyfnb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold/40 text-gold hover:bg-gold hover:text-primary-dark px-8 py-3.5 text-sm tracking-[0.2em] uppercase transition-all duration-300"
          >
            View Full Menu & Order
          </a>
        </motion.div>
      </div>
    </section>
  )
}
