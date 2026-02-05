import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-white">

      <div className="container-editorial pt-12 pb-10">

        {/* ===== MAIN GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* LOGO + ABOUT */}
          <div>
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

            <p className="text-white/60 leading-relaxed text-sm">
              Trusted source for quality sago and starch since 1981.
              Connecting farmers, processors, and buyers across regions.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-5 text-white/90">
              Quick Links
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-5 text-white/90">
              Services
            </h4>

            <ul className="space-y-3 text-white/60 text-sm">
              <li>Lab Testing</li>
              <li>Auction System</li>
              <li>Market Pricing</li>
              <li>Member Support</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-5 text-white/90">
              Contact
            </h4>

            <div className="space-y-4 text-white/60 text-sm">

              <div className="flex gap-3">
                <MapPin size={16}/>
                <p>Salem, Tamil Nadu 636001</p>
              </div>

              <div className="flex gap-3">
                <Phone size={16}/>
                <p>+91 98765 43210</p>
              </div>

              <div className="flex gap-3">
                <Mail size={16}/>
                <p>info@sagoserve.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">

          <p>© 2025 SAGOSERVE. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white transition">
              Privacy Policy
            </a>
            <a className="hover:text-white transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
