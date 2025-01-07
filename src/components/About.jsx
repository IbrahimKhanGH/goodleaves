function About() {
  const values = [
    {
      icon: "🌱",
      title: "Premium Quality",
      description: "Lab-tested products from trusted cultivators ensuring the highest standards"
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Rigorous testing and verification for your complete peace of mind"
    },
    {
      icon: "💚",
      title: "Expert Care",
      description: "Personalized guidance from our knowledgeable staff for your needs"
    }
  ]

  return (
    <section id="about" className="relative py-16 section-dark section-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gl-green">About Good Leaves</h2>
            <p className="text-xl text-gl-gold/90">
              Your trusted source for premium cannabis products in Tyler, Texas. We're dedicated 
              to providing exceptional service and education to our community.
            </p>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img 
                src="/about.png" 
                alt="Good Leaves Dispensary" 
                className="w-full h-auto rounded-xl shadow-2xl border border-gl-gold/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl p-3 bg-gl-gold/10 rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gl-green mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About