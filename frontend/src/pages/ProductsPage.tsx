import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Sago (Javvarisi)",
    desc: "High-quality sago processed and graded to meet domestic and export standards.",
    image: "/stats-bg.jpg",
  },
  {
    title: "Industrial Starch",
    desc: "Premium starch suitable for textile, paper, adhesive and industrial applications.",
    image: "/hero1.jpg",
  },
  {
    title: "Food Grade Starch",
    desc: "Refined starch used in food processing industries under strict quality standards.",
    image: "/hero2.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-28 text-center bg-gradient-to-b from-white via-gray-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl leading-tight"
        >
          Premium Quality <span className="text-amber-500">Products</span>
        </motion.h1>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Delivering trusted sago and starch solutions for food, industrial
          and export markets with uncompromised quality standards.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.desc}
                </p>

                <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded-full text-sm hover:bg-amber-600 transition shadow-md">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8">
            Quality You Can Trust
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            All our products are processed under strict quality control
            systems and tested in our NABL accredited laboratory to ensure
            compliance with FSSAI and IS standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif">
          Looking for Bulk Orders?
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Contact SAGOSERVE today for pricing, availability and export enquiries.
        </p>

        <button className="mt-10 px-10 py-4 bg-amber-500 rounded-full hover:bg-amber-600 transition shadow-lg text-lg">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default ProductsPage;