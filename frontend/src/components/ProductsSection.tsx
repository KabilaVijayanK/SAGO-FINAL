import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

import sagoTexture from "@/assets/sago-texture.jpg";
import starchProduct from "@/assets/starch-product.jpg";
import brokenSago from "@/assets/broken-sago.jpg";

const products = [
  {
    image: sagoTexture,
    title: "Sago",
    description: `
Premium Tapioca Sago
High-grade sago with uniform size and superior quality.

Chemical-Free Tapioca Sago
Naturally processed ensuring purity and safety.

Chemical-Free Tapioca Nylon Sago
Fine-textured sago without chemical additives.
    `,
  },
  {
    image: starchProduct,
    title: "Tapioca Starch",
    description: `
Dryer Tapioca Starch
Low moisture & extended shelf life.

Native Tapioca Starch
Pure, unmodified for food & industrial use.

Ground Tapioca Starch
Finely processed for consistency.
    `,
  },
  {
    image: brokenSago,
    title: "Broken Sago",
    description: `
Processed tapioca fragments
Ideal for fast cooking and
specialized food applications.
    `,
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* STATIC BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative max-w-[1200px] mx-auto px-6 text-white">
        {/* HEADER */}
        <div className="mb-16 max-w-[520px]">
          <h2 className="font-serif text-[46px] leading-tight mb-4">
            Our Products
          </h2>
          <p className="text-white/80 text-[15px] leading-relaxed">
            A carefully curated range of premium tapioca sago and starch
            products, crafted with strict quality control and cooperative
            excellence.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => {
            const cardRef = useRef<HTMLDivElement>(null);

            /* CARD ONLY PARALLAX */
            const { scrollYProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"],
            });

            const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ y }}
                className="relative h-[420px] perspective-[1400px]"
              >
                <motion.div
                  animate={{ rotateY: flipped === index ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT */}
                  <div
                    className="
                      absolute inset-0
                      bg-[#faf7f2]
                      rounded-2xl
                      shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                      flex flex-col
                      text-black
                    "
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="px-6 pt-6 text-[15px] font-medium">
                      {product.title}
                    </div>

                    {/* IMAGE – FULL CARD + HOVER */}
                    <motion.div
                      className="relative flex-1 overflow-hidden px-6 pt-6 pb-4"
                      whileHover={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 16,
                      }}
                    >
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="
                          w-full
                          h-[260px]
                          object-cover
                          rounded-lg
                        "
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      />
                    </motion.div>

                    <div className="flex justify-between items-center px-6 py-4 border-t text-sm">
                      <span className="bg-[#5f7a4f] text-white px-6 py-2 rounded-md">
                        Get started
                      </span>

                      <button
                        onClick={() => setFlipped(index)}
                        className="flex items-center gap-2"
                      >
                        Learn more <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="
                      absolute inset-0
                      rounded-2xl
                      bg-[#1f2933]
                      text-white
                      p-6
                      flex flex-col
                    "
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <h4 className="text-lg font-semibold mb-4">
                      {product.title}
                    </h4>

                    <div className="text-sm leading-relaxed text-white/85 whitespace-pre-line flex-1 overflow-y-auto pr-1">
                      {product.description}
                    </div>

                    <button
                      onClick={() => setFlipped(null)}
                      className="mt-6 flex items-center gap-2 text-[#f5d6a3] text-xs uppercase"
                    >
                      Back
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;