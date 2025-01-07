function Products() {
  const products = [
    {
      name: "Premium Flower",
      category: "Flower",
      image: "/flower.png",
      thc: "18-24%",
      cbd: "0.1%",
      description: "Hand-selected, premium grade cannabis flowers"
    },
    {
      name: "CBD Lotion",
      category: "Topicals",
      image: "/CBDlotion.png",
      description: "Soothing relief with premium CBD-infused lotion"
    },
    {
      name: "Vape Cartridges",
      category: "Concentrates",
      image: "/carts.png",
      description: "Pure and potent vape cartridges for your enjoyment"
    }
  ]

  return (
    <section id="products" className="relative py-16 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gl-green mb-3">Our Products</h2>
          <p className="text-xl text-gl-gold/90">
            Premium Cannabis Products for Your Well-being
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
                {product.thc && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <span className="glass-effect px-3 py-1 rounded-full text-sm text-gl-green">
                      THC: {product.thc}
                    </span>
                    <span className="glass-effect px-3 py-1 rounded-full text-sm text-gl-gold">
                      CBD: {product.cbd}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gl-gold">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gl-green mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products 