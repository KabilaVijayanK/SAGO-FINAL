import { Phone, Mail, Globe, Clock, MapPin } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Main Section */}
      <main className="bg-gradient-to-br from-slate-100 to-slate-200 pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              24/7 Customer Support – Always Here for You
            </h1>
            <p className="text-slate-600 mt-4 text-lg">
              Reach out to us anytime. We're happy to help.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Info */}
            <div className="bg-white rounded-2xl shadow-xl p-10 space-y-8">
              <h2 className="text-2xl font-semibold text-slate-800">
                Get in Touch
              </h2>

              <div className="space-y-6 text-slate-600">

                <div className="flex items-start gap-4">
                  <Phone className="text-green-500 mt-1" />
                  <span>9489905440, 9489905441, 9499018147</span>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-green-500 mt-1" />
                  <span>slm_mdsago@yahoo.co.in</span>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="text-green-500 mt-1" />
                  <span>www.sagoserve.co.in</span>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-green-500 mt-1" />
                  <span>Mon–Sat 9:45 AM – 5:45 PM</span>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-green-500 mt-1" />
                  <span>
                    Jagirammmapalayam(Post), Omalur Main Road, Salem – 636302
                  </span>
                </div>

              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-400 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Your Mobile Number"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-400 outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-400 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;