import { Phone, Mail, Globe, Clock, MapPin } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-slate-100 to-slate-200 pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Contact SAGOSERVE
            </h1>
            <p className="text-slate-600 mt-4 text-lg">
              Salem Starch and Sago Manufacturers' Service Industrial Co-operative Society Ltd. (IND.No.1421)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Info */}
            <div className="bg-white rounded-2xl shadow-xl p-10 space-y-8">
              <h2 className="text-2xl font-semibold text-slate-800">
                Get in Touch
              </h2>

              <div className="space-y-6 text-slate-600">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="text-green-600 mt-1" />
                  <span>
                    +91 99404 45416<br />
                    +91 94899 05441
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="text-green-600 mt-1" />
                  <span>
                    sagoservemarketing@gmail.com<br />
                    slm_mdsago@yahoo.co.in
                  </span>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <Globe className="text-green-600 mt-1" />
                  <span>www.sagoserve.co.in</span>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="text-green-600 mt-1" />
                  <span>Monday – Saturday | 9:30 AM – 5:30 PM</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-green-600 mt-1" />
                  <span>
                    Omalur Main Road,<br />
                    Jagir Ammapalayam (Post),<br />
                    Salem – 636 302,<br />
                    Tamil Nadu, India
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
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Your Mobile Number"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition duration-300"
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