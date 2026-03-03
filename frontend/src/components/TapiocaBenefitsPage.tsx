import { motion } from "framer-motion";
import { useMemo } from "react";
import { Shirt, Utensils, Droplets, Pill, FileText } from "lucide-react";
const benefits = [
  { text: "Supports Baby's Growth", angle: -120 },
  { text: "Strengthens Bones & Muscles", angle: -50 },
  { text: "Boosts Energy Levels", angle: 10 },
  { text: "Promotes Heart Health", angle: 60 },
  { text: "Regulates Blood Pressure", angle: 130 },
  { text: "Improves Digestion", angle: 180 },
];

export default function TapiocaBenefitsPremium() {
  const radius = 240;
  const center = 350;

  const points = useMemo(() => {
    return benefits.map((b) => {
      const rad = (b.angle * Math.PI) / 180;
      return {
        ...b,
        x: center + radius * Math.cos(rad),
        y: center + radius * Math.sin(rad),
      };
    });
  }, []);

  return (
    <section className="bg-[#f8f6f2] py-20 md:py-32 flex flex-col items-center overflow-hidden px-4">

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-16 md:mb-24 text-gray-900 text-center">
        Health Benefits of{" "}
        <span className="text-amber-700">Tapioca Sago</span>
      </h2>

      {/* DESKTOP CIRCLE LAYOUT */}
      <div className="relative w-[700px] h-[700px] hidden md:block">

        {/* OUTER RINGS */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-gray-300"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[70px] rounded-full border border-gray-300"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[140px] rounded-full border border-gray-300"
        />

        {/* CENTER */}
        <div className="absolute inset-[240px] bg-white rounded-full shadow-2xl border border-gray-200 flex items-center justify-center text-center px-10">
          <div>
            <h3 className="text-2xl font-semibold text-amber-800">
              Health benefits of
            </h3>
            <p className="text-blue-600 font-semibold text-xl mt-2">
              Tapioca sago
            </p>
            <p className="text-gray-900 text-sm mt-4 leading-relaxed">
              A Time-Tested Source <br /> of Nourishment
            </p>
          </div>
        </div>

        {/* BENEFIT CARDS - FIXED + GLOW */}
        {points.map((p, i) => (
          <motion.div
            key={i}
            style={{
              top: p.y - 30,
              left: p.x - 120,
            }}
            className="absolute w-[240px]"
            animate={{
              boxShadow: [
                "0 0 0px rgba(245,158,11,0)",
                "0 0 25px rgba(245,158,11,0.5)",
                "0 0 0px rgba(245,158,11,0)",
              ],
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-200 text-center">
              <p className="text-sm font-medium text-gray-800">
                {p.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE LAYOUT (STACKED GRID) */}
      <div className="md:hidden w-full max-w-md grid gap-6 mt-6">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            animate={{
              boxShadow: [
                "0 0 0px rgba(245,158,11,0)",
                "0 0 20px rgba(245,158,11,0.5)",
                "0 0 0px rgba(245,158,11,0)",
              ],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-200 text-center"
          >
            <p className="text-sm font-medium text-gray-800">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

     
<div className="mt-24 md:mt-40 w-full max-w-6xl px-4">

  {/* Heading */}
  <div className="flex items-center justify-center mb-12 md:mb-16">
    <div className="w-12 md:w-24 h-[2px] bg-gray-300 mr-4 md:mr-6" />
    <h3 className="text-xl md:text-3xl font-semibold text-amber-800 text-center">
      Industrial Uses of Tapioca Starch
    </h3>
    <div className="w-12 md:w-24 h-[2px] bg-gray-300 ml-4 md:ml-6" />
  </div>

  {/* Grid */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

    {[
      { name: "Textile Industry", Icon: Shirt },
      { name: "Food Processing", Icon: Utensils },
      { name: "Adhesive Industry", Icon: Droplets },
      { name: "Pharmaceutical Industry", Icon: Pill },
      { name: "Paper Industry", Icon: FileText },
    ].map((item, i) => {
      const Icon = item.Icon;

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm text-center transition-all duration-300"
        >
          {/* Icon */}
          <div className="mb-5 flex justify-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100">
              <Icon className="w-6 h-6 text-amber-700" strokeWidth={1.6} />
            </div>
          </div>

          {/* Text */}
          <p className="text-gray-800 font-medium text-base md:text-lg">
            {item.name}
          </p>
        </motion.div>
      );
    })}

  </div>
</div>

    </section>
  );
}