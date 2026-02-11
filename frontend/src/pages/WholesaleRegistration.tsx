import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WholesaleRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
      >
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.3em] text-amber-400 uppercase">
            JOIN WITH US
          </p>
          <h1 className="text-2xl md:text-3xl font-serif text-white mt-3">
            Explore Whole Sale
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">

          <Input label="Applicant Name and Firm Address" />

          <Select
            label="Name of the product and Requirement"
            options={["Sago", "Starch", "Broken"]}
          />

          <Select
            label="Product Quality type"
            options={["First Quality", "Second Quality", "Third Quality"]}
          />

          <Select
            label="Purpose of Purchase"
            options={["Food", "Textiles", "Pharmaceuticals", "Others"]}
          />

          <Input label="Required Quantity (Only in tons – Minimum 2.5 Tons)" />
          <Input label="TN GST No." />
          <Input label="FSSAI No." />
          <Input label="Aadhar card & PAN Number" />
          <Input label="Contact Number" />
          <Input label="E mail id" />

        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 border border-white/20 py-2.5 rounded-lg text-white hover:bg-white/10 transition"
          >
            ← Back
          </button>

          <button className="flex-1 bg-amber-500 py-2.5 rounded-lg text-black font-semibold hover:bg-amber-400 transition">
            Submit
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default WholesaleRegistration;


/* Reusable Components */

const Input = ({ label }) => (
  <div>
    <label className="block text-xs mb-1 text-gray-300">{label}</label>
    <input
      type="text"
      placeholder={label}
      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-500 outline-none"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="block text-xs mb-1 text-gray-300">{label}</label>
    <select
      className="w-full bg-gray-800 text-white border border-white/20 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
    >
      <option className="text-black">Select {label}</option>
      {options.map((opt, i) => (
        <option key={i} className="text-black">
          {opt}
        </option>
      ))}
    </select>
  </div>
);