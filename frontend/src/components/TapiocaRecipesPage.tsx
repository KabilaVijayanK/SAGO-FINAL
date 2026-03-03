import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Sago Payasam",
    image: "payasam.jpg",
    content:
      "A traditional sweet dessert made with tapioca pearls, milk, jaggery and dry fruits.",
  },
  {
    id: 2,
    title: "Sago Khichdi",
    image: "kichadi.jpg",
    content:
      "A delicious and light dish prepared with soaked sago, peanuts and spices.",
  },
  {
    id: 3,
    title: "Sago Vada",
    image: "vada.jpg",
    content:
      "Crispy fried patties made with sago and potatoes.",
  },
  {
    id: 4,
    title: "Sago Pongal",
    image: "pongal.jpg",
    content:
      "A savory South Indian style pongal made using tapioca pearls.",
  },
];


export default function TapiocaRecipesPage() {
  const [activeRecipe, setActiveRecipe] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-[#f8f6f2]">

      {/* ================= RECIPES SECTION ================= */}
<section className="max-w-7xl mx-auto py-22 px-6">

  {/* 🔥 TOP CENTER HEADING */}
  <div className="text-center mb-20">
    <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
      Recipes
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
      Tapioca Sago Recipes
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Discover traditional and modern recipes made using premium quality tapioca sago.
    </p>
  </div>

  {/* 🔥 GRID STARTS BELOW */}
  <div className="grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h3 className="text-3xl font-semibold text-gray-900 leading-tight mb-6">
        Delicious Ways to Enjoy Tapioca
      </h3>

      <p className="text-gray-600 mb-8">
        Explore a variety of authentic dishes prepared using tapioca sago — from sweet delicacies to savory favorites.
      </p>

      <button className="px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-80 transition">
        Explore Recipes →
      </button>
    </div>

    {/* RIGHT ACCORDION */}
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div
            onClick={() => setActiveRecipe(recipe.id)}
            className={`flex justify-between items-center px-8 py-6 cursor-pointer transition ${
              activeRecipe === recipe.id ? "bg-gray-50" : ""
            }`}
          >
            <span className="font-medium text-gray-900">
              {String(recipe.id).padStart(2, "0")}. {recipe.title}
            </span>
          </div>

          {activeRecipe === recipe.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-8 pb-8 grid md:grid-cols-2 gap-6"
            >
              <div>
                <p className="text-gray-600">{recipe.content}</p>
              </div>

              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-xl object-cover h-40 w-full"
              />
            </motion.div>
          )}

          <div className="border-t border-gray-200" />
        </div>
      ))}
    </div>
  </div>
  </section>

  {/* ================= TESTIMONIAL SECTION ================= */}
  <section className="bg-white py-32">
  <div className="flex items-center justify-center gap-6 mb-20">
    <div className="hidden sm:block h-[1px] w-32 bg-gradient-to-r from-transparent to-gray-900" />
    <div className="px-8 py-2.5 rounded-full border border-gray-900 text-sm tracking-widest font-medium text-gray-700 whitespace-nowrap">TESTIMONIALS</div>
    <div className="hidden sm:block h-[1px] w-32 bg-gradient-to-l from-transparent to-gray-900" />
  </div>
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h3 className="text-3xl font-semibold text-gray-900">
        What Our Clients are Saying
      </h3>

      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        Hear directly from our clients about their experiences and the
        results we've delivered.
      </p>
    </div>

    {/* Testimonial Grid */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* Card 1 */}
      <div className="border border-gray-300 rounded-2xl p-10 relative bg-white">

        {/* Quote Content */}
        <p className="text-gray-700 leading-relaxed mb-10 relative">
          “The auction system is transparent and reliable. It has
          significantly improved our trade efficiency and trust.”
        </p>

        {/* Bottom Profile */}
        <div className="flex items-center gap-5">

          <img
            src="p1.jpg"
            alt="Client"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />

          <div>
            <p className="font-semibold text-gray-900">
              Ema Watson
            </p>
            <p className="text-sm text-gray-500">
              Member
            </p>
          </div>

        </div>
      </div>

      {/* Card 2 */}
      <div className="border border-gray-300 rounded-2xl p-10 relative bg-white">

        {/* Quote Content */}
        <p className="text-gray-700 leading-relaxed mb-10">
          “Professional management and quality assurance standards
          make SAGOSERVE our preferred trading platform.”
        </p>

        {/* Bottom Profile */}
        <div className="flex items-center gap-5">

          <img
            src="p2.jpg"
            alt="Client"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />

          <div>
            <p className="font-semibold text-gray-900">
              Jakob Alison
            </p>
            <p className="text-sm text-gray-500">
              Merchant
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
    </div>
  );
}