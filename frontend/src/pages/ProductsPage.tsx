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
  
  
      <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-b from-white to-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl"
        >
          Our <span className="text-amber-500">Products</span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering premium quality sago and starch products with reliability and trust since 1981.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.desc}
                </p>

                <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded-full text-sm hover:bg-amber-600 transition">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">
            Quality You Can Trust
          </h2>

          <p className="text-gray-600 leading-relaxed">
            All our products are processed under strict quality control systems
            and tested in our NABL accredited laboratory to ensure compliance
            with FSSAI and IS standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-serif">
          Looking for Bulk Orders?
        </h2>

        <p className="mt-4 text-gray-300">
          Contact SAGOSERVE today for pricing, availability and export enquiries.
        </p>

        <button className="mt-8 px-8 py-3 bg-amber-500 rounded-full hover:bg-amber-600 transition">
          Contact Us
        </button>
      </section>
      <Navbar />
<Footer />
    </div>
  );
};

export default ProductsPage;