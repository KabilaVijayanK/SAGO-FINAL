import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* 🔁 CENTER CHANGING TEXT */
const empoweringLines = [
  "Salem’s Sago Industry",
  "Cooperative Strength",
  "Farmers and Manufacturers",
  "Members’ Interests",
  "Merchants and Trade",
  "Quality and Fair Pricing",
  "Sustainable Industrial Growth",
];

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 120]);

  /* Text loop */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % empoweringLines.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 BASE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🌑 GRADIENT OVERLAY (TOP → BOTTOM) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />

      {/* 🌑 VIGNETTE (EDGE DARKENING) */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.85)]" />

      {/* 🧠 CONTENT */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center text-white px-6"
      >
        {/* TOP BRAND */}
        <p className="text-secondary tracking-[0.45em] text-secondary mb-4 drop-shadow-md">
          SAGOSERVE
        </p>

        <p className="text-[13px] uppercase leading-relaxed mb-10 text-white/85 drop-shadow">
          SALEM STARCH AND SAGO MANUFACTURERS’ SERVICE <br />
          INDUSTRIAL CO-OPERATIVE SOCIETY LTD
        </p>

        {/* MAIN HEADING */}
        <h1
          className="
            font-serif
            text-[54px]
            md:text-[74px]
            leading-[1.12]
            mb-10
            max-w-[900px]
            mx-auto
            drop-shadow-[0_6px_25px_rgba(0,0,0,0.85)]
          "
        >
          Your Trusted Source for Quality <br />
          <span className="text-secondary drop-shadow-lg">
            Sago &amp; Starch
          </span>
        </h1>

        {/* EMPOWERING TEXT */}
        <div className="mt-6">
          <p className="text-sm tracking-[0.35em] text-secondary mb-3">
            SAGOSERVE – EMPOWERING
          </p>

          <motion.p
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-base
              md:text-lg
              font-medium
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]
            "
          >
            {empoweringLines[index]}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;