import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Location from './components/Location'
import OrderOnline from './components/OrderOnline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <OrderOnline />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
