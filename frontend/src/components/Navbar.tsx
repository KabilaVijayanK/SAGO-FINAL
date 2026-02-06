import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <nav
        className={`
          flex items-center justify-between
          h-16 px-8
          w-[92%] max-w-6xl
          rounded-2xl
          transition-all duration-300

          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              : "bg-black/30 backdrop-blur-md border border-white/10"
          }
        `}
      >
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SAGOSERVE"
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

        {/* CTA */}
<div className="flex items-center gap-3">
  
  {/* DESKTOP CTA */}
  <button
    className="
      hidden lg:inline-flex
      bg-white text-black
      px-6 py-2.5
      rounded-xl
      font-semibold text-sm
      hover:bg-[#f2f2f2]
      transition
      shadow-md
    "
  >
    Enquiry Now
  </button>

  {/* MOBILE CTA */}
  <button
    className="
      lg:hidden
      bg-white text-black
      px-4 py-2
      rounded-lg
      text-sm font-semibold
      shadow
    "
  >
    Enquiry
  </button>

  {/* MOBILE MENU */}
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="lg:hidden text-white"
  >
    {isMobileMenuOpen ? <X /> : <Menu />}
  </button>

</div>
      </nav>
    </motion.header>
  );
};

export default Navbar;