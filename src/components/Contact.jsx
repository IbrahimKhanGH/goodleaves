function Contact() {
  const reviews = [
    {
      quote: "Good Leaves has consistently provided me with high-quality products and exceptional service.",
      author: "Sarah M.",
      location: "Tyler, TX",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The staff's knowledge and attention to detail make every visit a great experience.",
      author: "Michael R.",
      location: "Tyler, TX",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "Their product selection and quality control are unmatched in the industry.",
      author: "David L.",
      location: "Tyler, TX",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section id="contact" className="relative py-16 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gl-green mb-3">Get in Touch</h2>
              <p className="text-gl-gold/90 mb-6">
                Questions about our products? We're here to help.
              </p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gl-gold/20 focus:border-gl-green focus:ring-1 focus:ring-gl-green"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gl-gold/20 focus:border-gl-green focus:ring-1 focus:ring-gl-green"
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gl-gold/20 focus:border-gl-green focus:ring-1 focus:ring-gl-green"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gl-green text-white py-4 rounded-lg font-semibold hover:bg-gl-gold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image}
                      alt={review.author}
                      className="w-12 h-12 rounded-full border-2 border-gl-gold/20"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gl-green">{review.author}</h4>
                      <p className="text-sm text-gl-gold">{review.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact 