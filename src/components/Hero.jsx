function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gl-green/95 via-black/80 to-gl-gold/30 z-10"></div>
        <img
          src="/hero-bg.jpg"
          alt="Cannabis plant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Cannabis Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="leaf-animation">
          {/* We'll add the CSS animation for this */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gl-gold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Good Leaves
              </span>
              <span className="block text-white text-4xl md:text-5xl mt-2">
                Dispensary
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 font-medium">
              Tyler's Premier Cannabis Destination
            </p>
            <p className="text-lg text-gl-gold/90 mb-8">
              Experience the finest quality cannabis products with expert guidance
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-block bg-gl-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gl-green transition-all duration-300 border-2 border-gl-gold hover:border-gl-green shadow-lg"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
