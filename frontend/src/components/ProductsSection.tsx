import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* 🔥 PRODUCTS */
const products = [
  { title: "Chemical Free Sago", image: "prd1.jpeg" },
  { title: "Chemical Free Nylon", image: "prd2.jpg" },
  { title: "Tapioca Sago", image: "prd3.jpg" },
  { title: "Tapioca Nylon", image: "prd2.jpg" },
  { title: "Tapioca Mothithana", image: "prd1.jpeg" },
  { title: "Tapioca Pearl", image: "prd3.jpg" },
  { title: "Tapioca Dryer Starch", image: "prd2.jpg" },
  { title: "Tapioca Native Starch", image: "prd1.jpeg" },
  { title: "Tapioca Grinded Starch", image: "prd2.jpg" },
  { title: "Tapioca Broken", image: "prd3.jpg" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 bg-[#f3f4f6] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-6 relative">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[42px] md:text-[48px] text-gray-900">
            Our Products
          </h2>
        </motion.div>

        {/* LEFT ARROW */}
        <div className="absolute inset-y-0 left-0 flex items-center z-20">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft size={22} />
          </button>
        </div>

        {/* RIGHT ARROW */}
        <div className="absolute inset-y-0 right-0 flex items-center z-20">
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* SCROLL CONTAINER */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex gap-10 
            overflow-x-auto 
            scroll-smooth 
            no-scrollbar 
            px-14
            snap-x snap-mandatory
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15 }}
              className="
                snap-start
                relative
                min-w-[320px]
                h-[460px]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                group
              "
            >
              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="
                  bg-white/20
                  backdrop-blur-xl
                  rounded-2xl
                  px-5 py-4
                  flex justify-between items-center
                ">
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      {product.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      Premium Quality
                    </p>
                  </div>

                  <Link
                    to="/products"
                    className="
                      w-11 h-11
                      bg-blue-600
                      rounded-full
                      flex items-center justify-center
                      text-white
                      shadow-md
                      hover:scale-110
                      transition
                    "
                  >
                    <ArrowUpRight size={18} />
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      {/* 🔥 EXPLORE PRODUCTS SECTION WITH SIDE LINES */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex items-center justify-center gap-8 mt-24"
>

  {/* LEFT LINE */}
  <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-300 flex-1 max-w-[300px]" />

  {/* CENTER BUTTON */}
  <Link
    to="/products"
    className="
      px-10 py-4
      bg-blue-600
      text-white
      text-lg
      font-semibold
      rounded-full
      shadow-lg
      hover:bg-blue-700
      hover:scale-105
      transition-all
      flex items-center gap-3
      whitespace-nowrap
    "
  >
    Explore Products
    <ArrowUpRight size={20} />
  </Link>

  {/* RIGHT LINE */}
  <div className="h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-300 flex-1 max-w-[300px]" />

</motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;