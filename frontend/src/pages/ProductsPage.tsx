import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sagoProducts = [
  {
    title: "Tapioca Sago",
    desc: "Standardized tapioca sago with consistent pearl formation and high swelling capacity suitable for domestic and export markets.",
    image: "/hero1.jpg",
  },
  {
    title: "Tapioca Nylon",
    desc: "Premium steam-processed variety with superior transparency and expansion properties preferred by snack manufacturers.",
    image: "/hero2.jpg",
  },
  {
    title: "Tapioca Mothithana",
    desc: "Traditional refined tapioca product valued for purity and digestibility.",
    image: "/prd1.jpeg",
  },
  {
    title: "Tapioca Pearl",
    desc: "Refined starch pearls offering smooth texture and translucent appearance after cooking.",
    image: "/hero1.jpg",
  },
  {
    title: "Tapioca Broken",
    desc: "Granulated form with high digestibility used in porridge and snacks.",
    image: "/hero2.jpg",
  },
];

const starchProducts = [
  {
    title: "Dryer Tapioca Starch",
    desc: "Stable moisture content with improved storage life, ideal for food and industrial use.",
    image: "/stats-bg.jpg",
  },
  {
    title: "Native Tapioca Starch",
    desc: "Natural white starch with excellent binding and thickening properties.",
    image: "/hero1.jpg",
  },
  {
    title: "Grinded Tapioca Starch",
    desc: "Fine particle starch for precision food and industrial formulations.",
    image: "/prd1.jpeg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const ProductCard = ({ product, i }: any) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    custom={i}
    className="group bg-[#f3efe9] rounded-3xl overflow-hidden 
               shadow-sm hover:shadow-xl 
               border border-[#e8e1d6]
               transition-all duration-500"
  >
    {/* IMAGE */}
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[240px] object-cover 
                   transition duration-700 
                   group-hover:scale-110"
      />
    </div>

    {/* CONTENT */}
    <div className="p-7">
      <h3 className="text-xl font-semibold text-[#2c2823] mb-3">
        {product.title}
      </h3>

      <p className="text-sm text-[#6e675f] leading-relaxed mb-6">
        {product.desc}
      </p>

      {/* BUTTON ROW */}
      <div className="flex items-center justify-between">
        <button className="px-5 py-2.5 
                           bg-[#5e7d55] text-white 
                           text-sm font-medium 
                           rounded-xl
                           hover:bg-[#4f6a48]
                           transition duration-300">
          Get Started
        </button>

        <button className="flex items-center gap-2 
                           text-sm font-medium 
                           text-[#2c2823]
                           group-hover:gap-3 
                           transition-all duration-300">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-16 text-center bg-gradient-to-b from-white via-gray-50 to-white">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="font-serif text-5xl md:text-6xl"
        >
          SAGOSERVE <span className="text-amber-500">Products</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Chemical-free, quality-tested tapioca sago and starch products manufactured under strict standards.
        </motion.p>
      </section>

      {/* SAGO PRODUCTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-14">
            Tapioca Sago Varieties
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sagoProducts.map((product, i) => (
              <ProductCard key={i} product={product} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* STARCH PRODUCTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-14">
            Tapioca Starch Varieties
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {starchProducts.map((product, i) => (
              <ProductCard key={i} product={product} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif">
          Bulk Orders & Export Enquiries
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          SAGOSERVE connects domestic and export traders with verified manufacturers ensuring transparency and quality.
        </p>

        <button className="mt-8 px-10 py-4 
                           bg-amber-500 
                           rounded-xl 
                           hover:bg-amber-600 
                           transition shadow-lg text-lg">
          Contact Us
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;