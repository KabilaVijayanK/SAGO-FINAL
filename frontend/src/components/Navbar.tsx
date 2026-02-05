import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Auction", href: "#auction" },
  { label: "Registration", href: "#register" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center"
        >
          <nav
            className="
              flex items-center justify-between
              h-16 px-8
              w-[92%] max-w-6xl

              bg-black/40
              backdrop-blur-xl
              border border-white/20

              rounded-2xl
              shadow-[0_8px_30px_rgba(0,0,0,0.45)]
            "
          >
            {/* LOGO */}
            <a href="/" className="flex items-center gap-3">
  <img 
    src="/logo.png" 
    alt="Sagoserve"
    className="w-8 h-8 object-contain"
  />
  <span className="text-white font-semibold text-lg">
    SAGOSERVE
  </span>
</a>


            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex gap-8 text-white/80 font-medium text-sm tracking-wide">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA BUTTON */}
            <button
              className="
                bg-white text-black
                px-6 py-2.5
                rounded-xl
                font-semibold text-sm

                hover:scale-105
                hover:bg-[#f2f2f2]
                transition
                shadow-md
              "
            >
              Enquiry Now
            </button>

            {/* MOBILE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
