import {
  Warehouse,
  FileText,
  FlaskConical,
  Building2,
  Users,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Warehouse,
    title: "Warehousing Facilities",
    desc: "10 owned warehouses ensuring safe storage and supply chain stability.",
  },
  {
    icon: FileText,
    title: "E-Auction Facilities",
    desc: "Transparent digital auction platform for fair and competitive pricing.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Facilities",
    desc: "FSSAI & IS standard quality testing ensuring compliance.",
  },
  {
    icon: Building2,
    title: "Marketing & Direct Sales",
    desc: "Direct sales terminal eliminating middlemen.",
  },
  {
    icon: Users,
    title: "Loan & Financial Support",
    desc: "Working capital credit facilities supporting members.",
  },
  {
    icon: Leaf,
    title: "Weighbridge Excellence",
    desc: "50 & 60 MT weighbridges ensuring accurate documentation.",
  },
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const duplicated = [...services, ...services];

  // 🔥 Auto scroll
useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const totalWidth = container.scrollWidth;
  const singleSetWidth = totalWidth / 2; // duplicated array so exact half

  let animationFrame: number;

  const animate = () => {
    if (!paused) {
      container.scrollLeft += 2; // speed

      // 🔥 TRUE seamless reset
      if (container.scrollLeft >= singleSetWidth) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }
    }

    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrame);
}, [paused]);

  // 🔥 Arrow move EXACT 1 card
  const scroll = (dir: "left" | "right") => {
    setPaused(true);
    const container = scrollRef.current;
    if (!container) return;

    setTimeout(() => {
      if (dir === "left") {
        container.scrollLeft -= 460; // 420px card + 40px gap
      } else {
        container.scrollLeft += 460; // 420px card + 40px gap
      }
    }, 0);

    setTimeout(() => setPaused(false), 2000);
  };

  return (
    <section className="py-28 bg-[#eaf2fb] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center px-6 mb-16">
        <p className="text-blue-600 tracking-[4px] text-sm mb-4">
          WHAT WE DO
        </p>
        <h2 className="font-serif text-[clamp(32px,5vw,60px)] text-gray-900">
          Services We Offer
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* SCROLL TRACK */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {duplicated.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  className="
                    min-w-[420px]   /* 🔥 Landscape width */
                    h-[220px]       /* 🔥 Landscape height */
                    bg-white
                    rounded-2xl
                    p-8
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    border border-gray-100
                    flex-shrink-0
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                    cursor-pointer
                  "
                >
                  <div className="w-10 h-10 border border-blue-200 rounded-md flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex items-center justify-center gap-8 mt-24"
>

  {/* LEFT LINE */}
  <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-gray-900 flex-1 max-w-[300px]" />

  {/* CENTER BUTTON */}
  <Link
    to="/services"
    className="
      px-10 py-4
      bg-blue-600
      text-white
      text-lg
      font-semibold
      rounded-full
      shadow-lg
      hover:bg-blue-700
      hover:scale-105
      transition-all
      flex items-center gap-3
      whitespace-nowrap
    "
  >
    Explore Services
    <ArrowUpRight size={20} />
  </Link>

  {/* RIGHT LINE */}
  <div className="h-[1px] bg-gradient-to-l from-transparent via-gray-900 to-gray-900 flex-1 max-w-[300px]" />

</motion.div>

    </section>
  );
};

export default ServicesSection;