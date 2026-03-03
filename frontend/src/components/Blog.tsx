import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title:
      "Strengthening cooperative marketing in the Sago & Starch industry",
    date: "September 07",
    image: "blog1.jpg",
  },
  {
    id: 2,
    title:
      "The role of SAGOSERVE in ensuring fair pricing for sago manufacturers",
    date: "November 08",
    image: "blog2.jpg",
  },
  {
    id: 3,
    title:
      "Serving members, stabilizing markets: The SAGOSERVE approach",
    date: "December 09",
    image: "blog3.jpg",
  },
];

export default function BlogNewsPage() {
  return (
    <section className="bg-[#f8f6f2] py-22">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP LABEL */}
        <div className="text-center mb-6">
          <span className="px-6 py-2 border border-gray-300 rounded-full text-sm tracking-widest text-gray-600">
            BLOG & NEWS
          </span>
        </div>

        {/* MAIN HEADING */}
        <div className="text-center mb-24 relative">

        <h3 className="text-[clamp(36px,5vw,64px)] font-semibold leading-tight text-gray-900">
    Use <span className="text-amber-700">SAGOSERVE</span> <br />
    To Drive <span className="relative inline-block">
      Growth
      <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-amber-700"></span>
    </span>{" "}
    At Your Business
  </h3>
  </div>
  

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-3 gap-12 mb-28">

          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md transition"
            >
              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-8">

                <p className="text-gray-800 leading-relaxed mb-6">
                  {blog.title}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="hover:text-black cursor-pointer">
                    Read more →
                  </span>

                  <span>{blog.date}</span>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
{/* BOTTOM CTA BOX WRAPPER */}
<div className="relative mb-24">

  {/* LEFT RIBBON LINE */}
  <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gray-900" />

  {/* RIGHT RIBBON LINE */}
  <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gray-900" />

  {/* MAIN CTA BOX */}
  <div className="border border-gray-900 rounded-3xl px-8 py-14 md:px-20 md:py-20 flex flex-col md:flex-row items-center justify-between bg-white shadow-sm gap-8 md:gap-0">

    <h4 className="text-3xl font-semibold text-gray-900 text-center md:text-left leading-snug mb-8 md:mb-0 md:mr-8">
      Start your journey with <span className="text-amber-700">SAGOSERVE</span> in the
      <br className="hidden md:block" />
      Sago and Starch Market
    </h4>

    <button className="px-10 py-4 border border-gray-900 rounded-full text-gray-900 font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all shadow-md">
      Contact Us →
    </button>

  </div>

</div>

      </div>

    </section>
  );
}