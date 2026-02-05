import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutScrollSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });

  /* TEXT 1 */
  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45],
    [40, 0, -40]
  );

  /* TEXT 2 */
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.75, 1],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.75, 1],
    [40, 0, -40]
  );

  return (
    <section
      ref={ref}
      className="relative h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      />

      {/* 🔥 DARK + GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

        {/* TEXT 1 */}
        <motion.div
          style={{ opacity: text1Opacity, y: text1Y }}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.35em] text-secondary uppercase">
            Our Quality Promise
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-[1.25]">
            Pure tapioca transformed into
            <br />
            <span className="text-secondary">
              world-class sago &amp; starch
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Every batch tested. Every grain trusted.
          </p>
        </motion.div>

        {/* TEXT 2 */}
        <motion.div
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="space-y-6">
            <p className="text-sm tracking-[0.35em] text-secondary uppercase">
              Our Legacy
            </p>

            <h2 className="text-3xl md:text-5xl font-serif leading-[1.25]">
              Over
              <span className="text-secondary"> 64 Years </span>
              of service to
              <br />
              the tapioca industry
            </h2>

            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
              Built on cooperative strength, transparency,
              and trust across generations.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutScrollSection;