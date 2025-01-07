import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-gl-gold/20 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Good Leaves" className="h-14 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gl-green hover:text-gl-gold border-b-2 border-transparent hover:border-gl-gold transition-all">Home</a>
            <a href="#about" className="text-gl-green hover:text-gl-gold border-b-2 border-transparent hover:border-gl-gold transition-all">About</a>
            <a href="#products" className="text-gl-green hover:text-gl-gold border-b-2 border-transparent hover:border-gl-gold transition-all">Products</a>
            <a href="#contact" className="text-gl-green hover:text-gl-gold border-b-2 border-transparent hover:border-gl-gold transition-all">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gl-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gl-green">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gl-green">About</a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-gl-green">Products</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gl-green">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 