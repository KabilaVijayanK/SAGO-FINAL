import { motion } from "framer-motion";
import {
  Users,
  FlaskConical,
  Building2,
  Warehouse,
  FileText,
  Leaf,
} from "lucide-react";

const services = [
  { icon: Users, title: "Members", description: "Supporting our cooperative family" },
  { icon: FlaskConical, title: "Laboratory", description: "Quality testing & certification" },
  { icon: Building2, title: "Merchant", description: "Trading & commerce support" },
  { icon: Warehouse, title: "Warehouse", description: "Secure storage facilities" },
  { icon: FileText, title: "Tender", description: "Transparent bidding process" },
  { icon: Leaf, title: "Tapioca", description: "Farm to factory solutions" },
];

const ServicesSection = () => {
  return (
    <section className="py-28 bg-[#f7f6f3]">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-20 text-center px-6">
        <span className="block text-secondary tracking-[4px] text-sm mb-4">
          WHAT WE DO
        </span>

        <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-gray-900">
          Services We Offer
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="
                bg-white
                border-2 border-gray-200
                rounded-2xl
                p-12
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition
              "
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-xl border border-secondary/30 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed max-w-[260px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;