import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HeroUltra = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen md:min-h-[120vh]
        overflow-hidden
        bg-white
      "
    >
      {/* 🔥 AMBIENT BLOBS (kept same but lighter visibility on white) */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="
          absolute -top-40 -left-40
          w-[420px] h-[420px]
          md:w-[600px] md:h-[600px]
          bg-gradient-to-r from-[#c08a5b]/20 to-[#8b5e34]/10
          blur-[120px] rounded-full
        "
      />

      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="
          absolute top-1/2 right-0
          w-[420px] h-[420px]
          md:w-[650px] md:h-[650px]
          bg-gradient-to-r from-[#8b5e34]/15 to-[#c08a5b]/10
          blur-[140px] rounded-full
        "
      />

      {/* 🏆 HERO CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="
          relative z-20
          pt-28 md:pt-40
          px-6 md:px-16
          max-w-6xl
        "
      >
        <p className="text-secondary tracking-[4px] md:tracking-[6px] text-xs md:text-sm mb-4">
          SINCE 1965
        </p>

        <h1
          className="
            font-serif font-semibold
           text-[#8b5e34]
            mb-6
            text-[42px] sm:text-[54px]
            md:text-[clamp(70px,9vw,120px)]
          "
        >
          SAGOSERVE
        </h1>

        {/* DESCRIPTION */}
        <div className="max-w-2xl mb-12 md:mb-14">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The Salem Starch and Sago Manufacturers’ Service Industrial
            Co-operative Society Ltd. is a pioneering organization dedicated to
            strengthening the tapioca sago and starch industry through
            cooperation, quality assurance, and transparent trade practices.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4 md:mt-5">
            With decades of service and the collective strength of hundreds of
            manufacturers, SAGOSERVE ensures fair pricing, organized marketing,
            and sustainable industrial growth—making Salem a trusted hub for
            world-class sago and starch.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Link
            to="/products"
            className="
              bg-gradient-to-r from-[#8b5e34] to-[#c08a5b]
              px-8 md:px-10 py-3 md:py-4
              rounded-lg md:rounded-xl
              text-sm md:text-base
              text-white font-semibold
              shadow-[0_0_20px_rgba(192,138,91,0.3)]
              hover:scale-105 transition
              inline-block text-center
            "
          >
            Explore Products →
          </Link>

          <Link
            to="/auction"
            className="
              border border-gray-300
              px-8 md:px-10 py-3 md:py-4
              rounded-lg md:rounded-xl
              text-sm md:text-base
              text-gray-800
              hover:bg-gray-100 transition
              inline-block text-center
            "
          >
            View Auctions
          </Link>
        </div>
      </motion.div>

      {/* 🌿 TREE – DESKTOP ONLY (same position, just darker for white bg) */}
      <motion.img
        src="/tree-line.png"
        alt="Sago Growth"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, 80]),
        }}
       className="
  hidden md:block
  absolute right-[-40px] top-20
  w-[520px]
  z-10 pointer-events-none
  opacity-80
  brightness-50
  contrast-125
"
      />

      {/* 🏷️ TAG LINE – DESKTOP ONLY */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="
          hidden md:block
          absolute right-[200px] top-[400px]
          px-5 py-2
          rounded-full
          border border-gray-200
          text-secondary
          text-sm tracking-wide
          bg-white
          shadow-sm
        "
      >
        Strength Through Cooperation
      </motion.div>
    </section>
  );
};

export default HeroUltra;