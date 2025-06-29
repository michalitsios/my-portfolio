import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "OLYMPUS TERRA",
        role: "Export & Invoicing Assistant",
        period: "Nov 2024 – Present",
        description: [
            "Managed invoicing and documentation processes for domestic and international fruit exports.",
            "Coordinated with logistics partners to ensure timely shipments to European clients.",
            "Collaborated with sales and operations teams to maintain pricing accuracy and customer records."
        ]
    },
    {
        company: "TARXONTIKO.GR",
        role: "Website Manager",
        period: "Oct 2024 – Present",
        description: [
            "Maintain and update the hotel's website to ensure content accuracy and availability.",
            "Coordinate with the business owner to publish offers, seasonal updates, and event announcements.",
            "Handle basic technical support, performance optimization, and plugin updates via WordPress."
        ]
    },
    {
        company: "FREELANCE",
        role: "Web Developer",
        period: "Jul 2023 - Present",
        description: [
        "Built websites for clients using React & Tailwind.",
        "Implemented animations with Framer Motion."
        ]
   },
   {
        company: "DIXONS SOUTH EAST EUROPE",
        role: "Store Cashier (Internship)",
        period: "Apr 2022 - Oct 2022",
        description: [
        "Handled daily transactions with speed and accuracy in a fast-paced retail environment.",
        "Maintained exceptional customer service and resolved inquiries with a professional attitude.",
        "Adapted to retail technologies and collaborated with team members to ensure a smooth checkout experience."
        ]
   }
];

function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="bg-[#0a192f] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-5xl mb-8 font-bold text-white">experience.</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Tabs */}
          <div className="flex flex-col border-l border-white/20 space-y-2">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left pl-4 py-2 border-l-4 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-white text-white font-semibold bg-white/10"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeIndex}
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold">
              {experiences[activeIndex].role} @{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-rose-400 bg-clip-text text-transparent">
                {experiences[activeIndex].company}
              </span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {experiences[activeIndex].period}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {experiences[activeIndex].description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
