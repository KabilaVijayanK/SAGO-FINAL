import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Gavel,
  Clock,
  TrendingUp,
  ShieldCheck,
  Users,
  ChevronDown,
  CheckCircle,
  FlaskConical,
  Radio,
  Handshake,
} from "lucide-react";
import heroBg from "@/assets/hero-sago.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
interface LotData {
  id: number;
  product: string;
  grade: string;
  quantity: string;
  base: number;
  current: number;
  time: number;
  status: string;
}

const demoLots: LotData[] = [
  { id: 1, product: "Premium Sago", grade: "A1", quantity: "10 Tons", base: 3200, current: 3450, time: 180, status: "LIVE" },
  { id: 2, product: "Tapioca Starch", grade: "A", quantity: "5 Tons", base: 2800, current: 2950, time: 0, status: "CLOSED" },
  { id: 3, product: "Broken Sago", grade: "B", quantity: "8 Tons", base: 2400, current: 2500, time: 400, status: "UPCOMING" },
];

const steps = [
  { icon: CheckCircle, label: "Register", desc: "Create your verified account" },
  { icon: FlaskConical, label: "Quality Testing", desc: "Lots tested & graded" },
  { icon: Radio, label: "Live Bidding", desc: "Compete in real-time" },
  { icon: Handshake, label: "Settlement", desc: "Transparent & fair" },
];

const insights = [
  { icon: TrendingUp, title: "Avg Winning Price", value: "+8%" },
  { icon: Users, title: "Active Members Today", value: "142" },
  { icon: ShieldCheck, title: "Verified Lots", value: "100%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? "0" + s : s}`;
};

const AuctionPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [lots, setLots] = useState(demoLots);
  const [selectedLot, setSelectedLot] = useState<LotData | null>(null);
  const [bidAmount, setBidAmount] = useState("");
  const [flashId, setFlashId] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLots((prev) =>
        prev.map((lot) => {
          if (lot.status !== "LIVE") return lot;
          if (lot.time <= 1) return { ...lot, status: "CLOSED", time: 0 };
          return { ...lot, time: lot.time - 1 };
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
const scrollToAuction = () => {
  const section = document.getElementById("auction-board");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  const handleBidSubmit = () => {
    if (!selectedLot) return;
    const newBid = Number(bidAmount);
    if (newBid <= selectedLot.current) {
      alert("Bid must be higher than current price");
      return;
    }

    setLots((prev) =>
      prev.map((lot) => {
        if (lot.id === selectedLot.id) {
          return { ...lot, current: newBid, time: lot.time <= 10 ? lot.time + 15 : lot.time };
        }
        return lot;
      })
    );

    setFlashId(selectedLot.id);
    setTimeout(() => setFlashId(null), 700);
    setSelectedLot(null);
    setBidAmount("");
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={heroBg} alt="Sago plantation" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

        <motion.div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ opacity: heroOpacity }}>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm px-5 py-2 mb-8"
          >
            <Gavel className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">SAGOSERVE E-Auction</span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight"
          >
            E-Auction
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="mt-5 text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto leading-relaxed"
          >
            Transparent. Competitive. Fair Price Discovery.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
  onClick={scrollToAuction}
  className="inline-flex items-center justify-center gap-2
             bg-yellow-500 text-black
             font-semibold px-8 py-3.5
             rounded-xl
             transition-all duration-300
             hover:scale-105 hover:bg-yellow-400
             active:scale-100"
>
  <Gavel className="h-4 w-4" />
  View Live Auctions
</button>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold px-8 py-3.5 rounded-full transition-colors hover:bg-primary-foreground/20">
              How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-primary-foreground/60" />
        </motion.div>
      </section>
      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-24 px-6">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
    <motion.div
      key={step.label}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={i}
      className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-elevated transition-all duration-300 hover:-translate-y-1"
    >
      {/* 🔥 ICON FIXED HERE */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg mb-5">
        <step.icon className="h-7 w-7 text-white drop-shadow-md" />
      </div>

      <span className="absolute top-4 right-4 text-xs font-bold text-muted-foreground/40">
        {String(i + 1).padStart(2, "0")}
      </span>

      <h3 className="font-display text-lg font-semibold text-foreground">
        {step.label}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  ))}
        </div>
      </section>
     {/* ===== LIVE AUCTION BOARD - BLUE EDITION ===== */}
<section
  id="auction-board"
  className="py-24 px-6 
             bg-gradient-to-br from-[#0b1120] via-[#13274f] to-[#1e3a8a] 
             text-white"
>
  <div className="max-w-6xl mx-auto">

    {/* Live Indicator */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      className="flex items-center gap-3 mb-2"
    >
      <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
      <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
        Live Now
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={1}
      className="font-display text-3xl sm:text-4xl font-bold mb-12 text-white drop-shadow-md"
    >
      Live Auction Board
    </motion.h2>

    {/* Desktop Table */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={2}
      className="hidden lg:block 
                 rounded-xl 
                 border border-white/10 
                 bg-white/5 
                 backdrop-blur-xl
                 overflow-hidden"
    >
      <table className="w-full text-left">

        {/* Header */}
        <thead>
          <tr className="border-b border-white/10 bg-white/10">
            {["Lot", "Product", "Grade", "Qty", "Base (₹)", "Current (₹)", "Time", "Status", "Action"].map((h) => (
              <th
                key={h}
                className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {lots.map((lot) => (
            <tr
              key={lot.id}
              className={`border-b border-white/10 hover:bg-white/10 transition ${
                flashId === lot.id ? "animate-pulse" : ""
              }`}
            >
              <td className="px-5 py-4 font-semibold">#{lot.id}</td>
              <td className="px-5 py-4">{lot.product}</td>
              <td className="px-5 py-4 text-white/70">{lot.grade}</td>
              <td className="px-5 py-4 text-white/70">{lot.quantity}</td>
              <td className="px-5 py-4 text-white/70">
                ₹{lot.base.toLocaleString()}
              </td>
              <td className="px-5 py-4 font-bold text-yellow-400">
                ₹{lot.current.toLocaleString()}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`font-mono text-sm ${
                    lot.status === "LIVE"
                      ? "text-green-300 font-semibold"
                      : "text-white/50"
                  }`}
                >
                  {lot.status === "LIVE"
                    ? formatTime(lot.time)
                    : "—"}
                </span>
              </td>

              <td className="px-5 py-4">
                <span
                  className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase rounded ${
                    lot.status === "LIVE"
                      ? "bg-green-600 text-white"
                      : lot.status === "CLOSED"
                      ? "bg-gray-700 text-gray-300"
                      : "bg-blue-700 text-white"
                  }`}
                >
                  {lot.status}
                </span>
              </td>

              <td className="px-5 py-4">
                {lot.status === "LIVE" ? (
                  <button
                    onClick={() => setSelectedLot(lot)}
                    className="px-4 py-2 text-sm font-semibold 
                               bg-yellow-500 text-black 
                               rounded-lg hover:bg-yellow-400 transition"
                  >
                    Place Bid
                  </button>
                ) : (
                  <span className="text-white/40">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </motion.div>

    {/* Mobile Cards */}
    <div className="lg:hidden space-y-4 mt-6">
      {lots.map((lot, i) => (
        <motion.div
          key={lot.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={i}
          className="rounded-xl border border-white/10 
                     bg-white/5 backdrop-blur-md p-5"
        >
          <div className="flex justify-between mb-3">
            <div>
              <h3 className="font-semibold">{lot.product}</h3>
              <span className="text-xs text-white/60">
                Lot #{lot.id} · Grade {lot.grade}
              </span>
            </div>
            <span className="text-xs font-bold uppercase">
              {lot.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
            <div>
              <span className="block text-white/60">Base</span>
              ₹{lot.base.toLocaleString()}
            </div>
            <div>
              <span className="block text-white/60">Current</span>
              <span className="text-yellow-400 font-bold">
                ₹{lot.current.toLocaleString()}
              </span>
            </div>
          </div>

          {lot.status === "LIVE" && (
            <button
              onClick={() => setSelectedLot(lot)}
              className="w-full py-2.5 bg-yellow-500 text-black 
                         font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Place Bid
            </button>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* ===== BID MODAL ===== */}
     <AnimatePresence>
  {selectedLot && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/60 backdrop-blur-sm px-4"
      onClick={() => setSelectedLot(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl 
                   bg-[#0f172a] 
                   border border-white/10 
                   p-8 text-white"
      >
        <div className="flex justify-between mb-6">
          <h3 className="text-xl font-bold">
            Place Bid — Lot #{selectedLot.id}
          </h3>
          <button onClick={() => setSelectedLot(null)}>✕</button>
        </div>

        <div className="bg-white/5 rounded-xl p-4 mb-6">
          <span className="block text-sm text-white/60 mb-1">
            Current Price
          </span>
          <span className="text-3xl font-bold text-yellow-400">
            ₹{selectedLot.current.toLocaleString()}
          </span>
        </div>

        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder={`Min ₹${(selectedLot.current + 1).toLocaleString()}`}
          className="w-full border border-white/10 rounded-xl px-4 py-3 mb-6 
                     bg-white/5 text-white placeholder:text-white/50 
                     focus:ring-2 focus:ring-yellow-500 outline-none"
        />

        <button
          onClick={handleBidSubmit}
          className="w-full py-3.5 font-semibold rounded-xl 
                     bg-yellow-500 text-black
                     hover:bg-yellow-400 transition"
        >
          Confirm Bid
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* ===== TRANSPARENCY ===== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
          >
            No Middlemen.{" "}
            <span className="text-gradient-gold">Only Fair Market Value.</span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            SAGOSERVE ensures transparent bidding, verified lots, and real-time price discovery for every participant.
          </motion.p>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

    {insights.map((item, i) => (
      <motion.div
        key={item.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={i}
        className="flex flex-col items-center text-center 
                   p-10 
                   bg-[#111111] 
                   border border-white/10 
                   rounded-xl 
                   hover:border-yellow-500/40
                   transition-all duration-300"
      >
        {/* ICON */}
        <div className="flex items-center justify-center 
                        w-14 h-14 
                        rounded-lg 
                        bg-yellow-500/10 
                        mb-6">
          <item.icon className="h-6 w-6 text-yellow-500" />
        </div>

        {/* VALUE */}
        <span className="text-4xl font-bold text-white font-display">
          {item.value}
        </span>

        {/* TITLE */}
        <span className="mt-2 text-sm text-gray-400 uppercase tracking-wider">
          {item.title}
        </span>
      </motion.div>
    ))}

  </div>
</section>

      {/* ===== CTA ===== */}
<section className="py-24 px-6 bg-black">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    custom={0}
    className="max-w-4xl mx-auto text-center 
               bg-gradient-to-r from-gray-900 to-black
               border border-white/10
               rounded-2xl
               p-12 sm:p-16"
  >
    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
      Ready to Participate in the Next Auction?
    </h2>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        className="inline-flex items-center justify-center 
                   px-8 py-3.5 
                   rounded-xl 
                   font-semibold 
                   bg-yellow-500 text-black
                   hover:bg-yellow-400 
                   transition-all duration-300"
      >
        Register Now
      </button>

      <button
        className="inline-flex items-center justify-center 
                   px-8 py-3.5 
                   rounded-xl 
                   font-semibold 
                   border border-white/30 
                   text-white
                   hover:bg-white/10 
                   transition-all duration-300"
      >
        View Upcoming Lots
      </button>
    </div>
  </motion.div>
</section>

      <Footer />
   
    </div>
  );
};

export default AuctionPage;
