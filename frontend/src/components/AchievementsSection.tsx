import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / 60;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}+</>;
};

export default function AchievementsSection() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">

      {/* SOFT GOLD GLOW BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,138,91,0.15),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <p className="tracking-[5px] text-amber-400 uppercase">
          Our Impact
        </p>

        <h2 className="text-5xl text-white mt-4 mb-24">
          Numbers That Matter
        </h2>

        {/* CENTER STAT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            mx-auto
            w-[320px] h-[320px]
            rounded-full
            bg-gradient-to-br from-amber-500/20 to-white/5
            backdrop-blur-xl
            border border-amber-400/20
            flex flex-col justify-center items-center
            shadow-[0_0_80px_rgba(192,138,91,0.3)]
          "
        >
          <p className="text-6xl font-bold text-white">
            <Counter end={1200} />
          </p>

          <p className="text-gray-300 mt-3">
            Registered Members
          </p>
        </motion.div>

        {/* FLOATING STATS */}
        <div className="relative mt-24 flex justify-center gap-16">

          {[
            { n: 40, label: "Years of Excellence" },
            { n: 25, label: "Daily Auctions" },
            { n: 90, label: "Lakh Tons/Day" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="
                bg-white/5
                border border-white/10
                px-10 py-8
                rounded-2xl
                backdrop-blur-lg
              "
            >
              <p className="text-4xl text-white font-bold">
                <Counter end={item.n} />
              </p>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
