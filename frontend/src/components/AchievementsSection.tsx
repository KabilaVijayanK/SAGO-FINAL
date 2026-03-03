import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Package, Briefcase, Trophy, Users } from "lucide-react";
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
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <p className="tracking-[4px] text-blue-600 uppercase text-sm">
          Our Impact
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4 mb-20">
          Numbers That Matter
        </h2>

      {/* 🔥 TOP TWO CIRCLES – STRONG VISIBLE VERSION */}
<div className="flex flex-col md:flex-row items-center justify-center gap-24 mb-28">

  {/* MEMBERS CIRCLE */}
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="
      relative
      w-[270px] h-[270px]
      rounded-full
      bg-white
      border-4 border-blue-600
      shadow-[0_15px_40px_rgba(37,99,235,0.25)]
      flex flex-col items-center justify-center
    "
  >
    <p className="text-5xl font-bold text-blue-600">
      <Counter end={344} />
    </p>
    <p className="mt-3 text-gray-700 text-sm font-medium">
      Active Members
    </p>
  </motion.div>

  {/* MERCHANTS CIRCLE */}
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="
      relative
      w-[240px] h-[240px]
      rounded-full
      bg-white
      border-4 border-gray-800
      shadow-[0_12px_30px_rgba(0,0,0,0.15)]
      flex flex-col items-center justify-center
    "
  >
    <p className="text-4xl font-bold text-gray-900">
      <Counter end={177} />
    </p>
    <p className="mt-2 text-gray-600 text-sm font-medium">
      Active Merchants
    </p>
  </motion.div>

</div>
{/* 🔥 COMPACT PREMIUM STATS */}
<div className="max-w-2xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {[
      {
        value: "84.4 Lakhs",
        label: "Total Bags Sold",
        Icon: Package,
      },
      {
        value: "Rs. 3,042 Crore",
        label: "Total Sales Value",
        Icon: Briefcase,
      },
      {
        value: "Rs. 36.03",
        label: "Average Sale Value",
        Icon: Trophy,
      },
      {
        value: "Rs. 15.97 Crore",
        label: "Total Profit Earned",
        Icon: Users,
      },
    ].map((item, i) => {
      const Icon = item.Icon;

      return (
        <motion.div
          key={item.label}
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="
            bg-gray-100
            rounded-xl
            px-6 py-6
            transition-all duration-300
            hover:shadow-md
          "
        >
          <div className="flex items-start gap-4">

            {/* ICON */}
            <Icon
              className="w-6 h-6 text-gray-700 mt-1"
              strokeWidth={1.6}
            />

            {/* CONTENT */}
            <div>
              <div className="text-2xl font-semibold text-gray-900">
                {item.value}
              </div>

              <div className="text-gray-600 text-sm mt-2 leading-snug">
                {item.label}
              </div>
            </div>

          </div>
        </motion.div>
      );
    })}

  </div>
</div>

      </div>
    </section>
  );
}