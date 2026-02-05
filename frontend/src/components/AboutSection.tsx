import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import warehouseImg from "@/assets/warehouse.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* 🔥 PARALLAX VALUES */
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-[#faf7f2] py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-12 items-center gap-20">

          {/* 🔥 LEFT – IMAGE (PARALLAX) */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
              <img
                src={warehouseImg}
                alt="SAGOSERVE Warehouse"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Decorative outline */}
            <div
              className="
                absolute -bottom-10 -right-10
                w-[180px] h-[180px]
                rounded-[32px]
                border-2 border-[#c08a5b]/70
              "
            />
          </motion.div>

          {/* 🔥 RIGHT – CONTENT (PARALLAX) */}
          <motion.div
            style={{ y: contentY }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <span className="block text-[#c08a5b] tracking-[4px] text-sm mt-6 mb-6">
              ABOUT US
            </span>

            <h2 className="font-serif text-[clamp(36px,4.2vw,60px)] leading-[1.15] text-[#1f2933] mb-6">
              Sagoserve
              <br />
              <span className="text-[#6b7280]">
                A Gift to Tapioca Industry
              </span>
            </h2>

            <div className="space-y-5 text-[#4b5563] text-[16px] leading-[1.75] max-w-lg">
              <p>
                Formed to solve marketing issues faced by starch and sago
                manufacturers, SAGOSERVE has been the cornerstone of the
                tapioca industry since 1981.
              </p>

              <p>
                We provide fair pricing through an organized auction system,
                backed by government support, ensuring every stakeholder
                benefits from transparent and efficient operations.
              </p>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 6 }}
              className="
                inline-flex items-center gap-3
                mt-12 px-10 py-4
                rounded-full
                border-2 border-[#1e3a8a]
                text-[#1e3a8a] font-medium
                hover:bg-[#1e3a8a]
                hover:text-white
                transition-all
              "
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
