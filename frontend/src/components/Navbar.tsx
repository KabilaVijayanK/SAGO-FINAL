import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "E-Auction", href: "/auction" },
  { label: "Applications", href: "/applications" },
  { label: "Blogs & News", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      >
        <nav
          className={`
            flex items-center
            h-16 px-8
            w-[96%] max-w-7xl
            rounded-2xl
            transition-all duration-300
            ${
              scrolled
                ? "bg-black/70 backdrop-blur-xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                : "bg-black/30 backdrop-blur-md border border-white/10"
            }
          `}
        >
          {/* LEFT - LOGO */}
          <div className="flex items-center min-w-[180px]">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="SAGOSERVE" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg tracking-wide">
                SAGOSERVE
              </span>
            </Link>
          </div>

          {/* CENTER - DESKTOP NAV */}
          <div className="hidden xl:flex flex-1 justify-center items-center gap-6 text-[13px] tracking-wide text-white/80 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative hover:text-white transition duration-300 group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Registration Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-white transition">
                Registration <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl py-3 w-56 z-[999]"
                  >
                    <Link
                      to="/register/member"
                      className="block px-5 py-2 text-sm text-white/80 hover:text-white"
                    >
                      Member Registration
                    </Link>
                    <Link
                      to="/register/merchant"
                      className="block px-5 py-2 text-sm text-white/80 hover:text-white"
                    >
                      Merchant Registration
                    </Link>
                    <Link
                      to="/register/wholesale"
                      className="block px-5 py-2 text-sm text-white/80 hover:text-white"
                    >
                      Wholesale Registration
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT - CTA + MOBILE BUTTON */}
          <div className="flex items-center justify-end min-w-[180px] gap-3">
            <Link
              to="/contact"
              className="hidden xl:inline-flex bg-white text-black px-6 py-2 rounded-xl font-semibold text-sm shadow-md hover:bg-white/90 transition"
            >
              Enquire Now
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden text-white"
            >
              <Menu />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl p-8"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-white font-semibold text-lg">
                SAGOSERVE
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-white text-lg font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Registration */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileDropdownOpen(!isMobileDropdownOpen)
                  }
                  className="flex items-center gap-2"
                >
                  Registration <ChevronDown size={18} />
                </button>

                {isMobileDropdownOpen && (
                  <div className="ml-4 mt-4 flex flex-col gap-3 text-base text-white/80">
                    <Link to="/register/member">Member Registration</Link>
                    <Link to="/register/merchant">Merchant Registration</Link>
                    <Link to="/register/wholesale">Wholesale Registration</Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold inline-block hover:bg-white/90 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;