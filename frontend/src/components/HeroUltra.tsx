import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
        bg-[#120b07]
      "
    >
      {/* 🔥 AMBIENT BLOBS (unchanged desktop, auto scales mobile) */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="
          absolute -top-40 -left-40
          w-[420px] h-[420px]
          md:w-[600px] md:h-[600px]
          bg-gradient-to-r from-[#c08a5b]/40 to-[#8b5e34]/20
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
          bg-gradient-to-r from-[#8b5e34]/30 to-[#c08a5b]/10
          blur-[140px] rounded-full
        "
      />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

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
        <p className="text-[#c08a5b] tracking-[4px] md:tracking-[6px] text-xs md:text-sm mb-4">
          SINCE 1965
        </p>

        <h1
          className="
            font-serif font-semibold
            text-transparent bg-clip-text
            bg-gradient-to-r
            from-[#f5d6a3] via-[#c08a5b] to-[#8b5e34]
            drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]
            mb-6

            text-[42px] sm:text-[54px]
            md:text-[clamp(70px,9vw,120px)]
          "
        >
          SAGOSERVE
        </h1>

        {/* DESCRIPTION */}
        <div className="max-w-2xl mb-12 md:mb-14">
          <p className="text-[#e6d3c2] text-base md:text-lg leading-relaxed">
            The Salem Starch and Sago Manufacturers’ Service Industrial
            Co-operative Society Ltd. is a pioneering organization dedicated to
            strengthening the tapioca sago and starch industry through
            cooperation, quality assurance, and transparent trade practices.
          </p>

          <p className="text-[#d8c2ad] text-base md:text-lg leading-relaxed mt-4 md:mt-5">
            With decades of service and the collective strength of hundreds of
            manufacturers, SAGOSERVE ensures fair pricing, organized marketing,
            and sustainable industrial growth—making Salem a trusted hub for
            world-class sago and starch.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <button
            className="
              bg-gradient-to-r from-[#8b5e34] to-[#c08a5b]
              px-8 md:px-10 py-3 md:py-4
              rounded-lg md:rounded-xl
              text-sm md:text-base
              text-white font-semibold
              shadow-[0_0_30px_rgba(192,138,91,0.4)]
              hover:scale-105 transition
            "
          >
            Explore Products →
          </button>

          <button
            className="
              border border-[#c08a5b]/40
              px-8 md:px-10 py-3 md:py-4
              rounded-lg md:rounded-xl
              text-sm md:text-base
              text-[#d2a679]
              hover:bg-[#c08a5b]/10 transition
            "
          >
            View Auctions
          </button>
        </div>
      </motion.div>

      {/* 🌿 TREE – DESKTOP ONLY */}
      <motion.img
        src="/tree-line.png"
        alt="Sago Growth"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.55, x: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, 80]),
        }}
        className="
          hidden md:block
          absolute right-[-40px] top-20
          w-[520px]
          z-10 pointer-events-none
          opacity-50 brightness-75 contrast-110
          drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]
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
          border border-[#c08a5b]/40
          text-[#f5d6a3]
          text-sm tracking-wide
          bg-[#120b07]/45 backdrop-blur-sm
          shadow-[0_0_18px_rgba(192,138,91,0.3)]
        "
      >
        Strength Through Cooperation
      </motion.div>
    </section>
  );
};

export default HeroUltra;
