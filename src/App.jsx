import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AgeVerification from './components/AgeVerification'

function App() {
  return (
    <div className="min-h-screen">
      <AgeVerification />
      <Navbar />
      <main className="bg-pattern">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
