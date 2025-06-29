import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope  } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import TypingEffect from "./components/TypingEffect";
import ExperienceSection from "./components/ExperienceSection";

const projects = [
  {
    title: "Game Stats Tracker",
    description: "A React app that tracks ranked progress in League of Legends. ",
    github: "https://github.com/michalitsios/game-stats-tracker"
  },
  {
    title: "Portfolio Website",
    description: "A website created to showcase my skills and hobbies.",
    github: "https://github.com/michalitsios/portfolio-website"
  },
  {
    title: "AI Prompt Tool",
    description: "An interface to generate and test prompts in real-time.",
    github: "https://github.com/michalitsios/ai-prompt-tool"
  },
  {
    title: "Weather App",
    description: "A react app that tracks the weather in real-time.",
    github: "https://github.com/michalitsios/weather-app"
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function App() {

  const [submitted, setSubmitted] = useState(false);

  return (

    <main className="bg-white text-black dark:bg-black dark:text-white font-ntr">
      <header className="fixed top-0 left-0 w-full bg-[#0a192f] bg-opacity-30 backdrop-blur-lg text-white">
        <nav className="max-w-5xl mx-auto px-6 py-3 grid grid-cols-6 items-center">
          <div className="col-span-2 flex items-center gap-8">
            <a href="#" className="hover:text-gray-400 font-bold transition text-sm whitespace-nowrap">Apostolos Michalitsios</a>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="#hero" className="hover:text-gray-400 font-bold transition">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400 font-bold transition">About</a></li>
              <li><a href="#experience" className="hover:text-gray-400 font-bold transition">Experience</a></li>
              <li><a href="#projects" className="hover:text-gray-400 font-bold transition">Projects</a></li>
            </ul>
          </div>

          <div className="col-span-2"></div>

          <div className="col-span-2 flex justify-end items-center gap-4">

          {/* Right: Icons */}
          <div className="col-span-2 flex justify-end items-center gap-4">
            <a
              href="mailto:tolis788@gmail.com"
              className="hover:text-gray-400 transition"
              aria-label="Email me"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>

            <a href="https://github.com/michalitsios" className="hover:text-gray-400 transition" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>

            <a href="https://linkedin.com/in/michalitsios" className="hover:text-gray-400 transition" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      
      <section id="hero" className="min-h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center px-6">
        <FadeInWhenVisible>
          <TypingEffect
            segments={[
              { text: "hi, ", className: "font-semi-bold" },
              { text: "apostolos", className: "bg-gradient-to-r from-yellow-400 to-rose-400 bg-clip-text text-transparent" },
              { text: " here.", className: "font-semi-bold" }
            ]}
          />

            <p className="text-lg md:text-xl text-white/45 max-w-xl mb-6 py-8">
              I'm a web developer from Katerini, Greece. Recently, I finalized my
              Degree in Computer and Science Engineering and preparing to
              contribute in organizational success while developing new skills
              and gaining real-world experience.
            </p>
            <a
              href="#projects"
              className="block w-40 mx-auto text-center border border-white text-white py-5 rounded-lg bg-[#0e223f] hover:bg-white/20 backdrop-blur-md shadow-lg transition-all duration-300">
              Projects
            </a>
        </FadeInWhenVisible>
      </section>

      {/* About Section */}

      <section id="about" className="bg-[#0a192f] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">  
          <FadeInWhenVisible>
            <h1 className="text-5xl md:text-5xl mb-4 font-bold text-white">about me.</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
        I'm a <span className="bg-gradient-to-r from-yellow-400 to-rose-400 bg-clip-text text-transparent">web developer</span> passionate about building clean, responsive, and high-performance web apps. I focus on React, TailwindCSS and modern frontend technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              Currently working on personal projects, learning new stacks, and open to new opportunities.
            </p>
          </FadeInWhenVisible>
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/me.jpg"  // βάλτο μέσα στο public/ ή άλλαξε το path
              alt="Apostolos Michalitsios"
              className="w-80 h-90 block object-cover rounded-xl shadow-lg border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
          
      <ExperienceSection>

      </ExperienceSection>

      {/* Projects Section */}

      <section id="projects" className="bg-[#0a192f] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInWhenVisible>
        <h1 className="text-5xl md:text-5xl mb-4 font-bold text-white">projects.</h1>

        <motion.div
          className="grid md:grid-cols-4 py-8 gap-3 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition hover:ring-2 hover:ring-white/30"
              variants={item}
              whileHover={{ scale: 1.0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* File Icon */}
              <FaRegFileAlt className="absolute top-4 left-4 ml-4 text-gray-400 size-6" />

              {/* Github Icon */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-gray-400 mr-3 hover:text-white transition"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub size={20} />
              </a>

              <h3 className="text-xl text-white pt-7 font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-md">{project.description}</p>
            </motion.div>
          ))}
          </motion.div>
        </FadeInWhenVisible>
      </div>
      </section>

      <footer
        className="bg-[#0a192f] text-gray-400 text-center py-6 text-sm border-t border-white/10">
        <p>
           © {new Date().getFullYear()} Built & designed by{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-rose-400 bg-clip-text text-transparent font-semibold">Apostolos Michalitsios</span>. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default App
