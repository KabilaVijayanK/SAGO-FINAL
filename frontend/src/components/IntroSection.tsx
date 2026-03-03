import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

  const [rates, setRates] = useState({
    sago: 0,
    starch: 0,
    broken: 0,
  });

  const rateItems = [
    { label: "Sago", value: rates.sago },
    { label: "Starch", value: rates.starch },
    { label: "Broken Sago", value: rates.broken },
  ];
  const [activeRate, setActiveRate] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveRate((prev) => (prev + 1) % rateItems.length);
  }, 2500);

  return () => clearInterval(interval);
}, [rateItems.length]);

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

  /* 🔥 Animated Rates */
  useEffect(() => {
    const targets = { sago: 3200, starch: 2850, broken: 2600 };

    const interval = setInterval(() => {
      setRates((prev) => ({
        sago: prev.sago < targets.sago ? prev.sago + 80 : targets.sago,
        starch: prev.starch < targets.starch ? prev.starch + 70 : targets.starch,
        broken:
          prev.broken < targets.broken
            ? prev.broken + 60
            : targets.broken,
      }));
    }, 40);

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

      {/* 🌑 OVERLAYS */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.85)]" />

      {/* 🧠 CENTER CONTENT */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center text-white px-6"
      >
        <p className="tracking-[0.45em] text-secondary mb-4 drop-shadow-md">
          SAGOSERVE
        </p>

        <p className="text-[13px] uppercase leading-relaxed mb-10 text-white/85 drop-shadow">
          SALEM STARCH AND SAGO MANUFACTURERS’ SERVICE <br />
          INDUSTRIAL CO-OPERATIVE SOCIETY LTD
        </p>

        <h1 className="font-serif text-[54px] md:text-[74px] leading-[1.12] mb-10 max-w-[900px] mx-auto drop-shadow-[0_6px_25px_rgba(0,0,0,0.85)]">
          Your Trusted Source for Quality <br />
          <span className="text-secondary drop-shadow-lg">
            Sago &amp; Starch
          </span>
        </h1>

        <div className="mt-6">
          <p className="text-sm tracking-[0.35em] text-secondary mb-3">
            SAGOSERVE – EMPOWERING
          </p>

          <motion.p
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg font-medium text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {empoweringLines[index]}
          </motion.p>
        </div>
      </motion.div>


<div className="hidden xl:block absolute right-[8%] top-[58%] -translate-y-1/2 z-20">
  <div className="
    w-[260px]
    bg-white
    border border-gray-200
    rounded-lg
    px-6 py-5
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
    text-center
  ">

    <motion.div
      key={activeRate}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <p className="text-xs text-gray-500 mb-2 tracking-wide uppercase">
        {rateItems[activeRate].label}
      </p>

      <div className="text-3xl font-semibold text-secondary leading-tight">
        ₹ {rateItems[activeRate].value.toLocaleString()}
      </div>

      <div className="text-[11px] text-gray-400 mt-1 tracking-wide">
        PER METRIC TON
      </div>
    </motion.div>

  </div>
</div>

  <Link
  to="/contact"
  className="
    hidden xl:flex
    fixed right-0 top-[36%]
    -translate-y-1/2
    bg-secondary
    text-white
    text-sm
    font-semibold
    tracking-widest
    px-4 py-8
    rounded-l-xl
    shadow-lg
    hover:bg-secondary/90
    transition
  "
  style={{ writingMode: "vertical-rl" }}
>
  ENQUIRE
</Link>
<div
  className="
    hidden xl:flex
    fixed right-0 top-[60%]
    -translate-y-1/2
    bg-black/80
    text-white
    text-sm
    font-semibold
    tracking-widest
    px-4 py-6
    rounded-l-xl
    border border-white/15
    backdrop-blur-sm
  "
  style={{ writingMode: "vertical-rl" }}
>
  TOP RATES
</div>
    </section>
  );
};

export default IntroSection;