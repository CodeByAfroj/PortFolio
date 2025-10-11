import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 transition-colors duration-500">
      <div className="px-5 md:px-10">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block">About Me</span>
          <span className="text-blue-500">

          </span>
        </motion.h1>

        {/* About Description */}
        <motion.div
          className="dark:bg-gray-900 max-w-5xl mx-auto text-lg leading-relaxed text-center space-y-6 mt-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="dark:bg-gray-800 text-justify p-4 rounded-xl shadow-sm">
            Hello! I’m{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 gradient-animate">
              Afroj
            </span>
            , a passionate full-stack developer with a strong focus on building
            elegant, scalable, and efficient web applications. I enjoy blending
            creativity with logic to design intuitive user experiences and
            powerful backend systems.
          </p>

          <p className="p-3 text-justify">
            With a solid foundation in both{" "}
            <span className="font-semibold text-blue-500">Frontend</span> and{" "}
            <span className="font-semibold text-teal-400">Backend</span>{" "}
            technologies, I’ve developed projects ranging from interactive UI
            components and dashboards to complete authentication systems,
            automation agents, and blockchain-based applications.
          </p>

          <p className="p-4 text-justify">
            I’m constantly learning new tools and frameworks, exploring the
            intersection of design and technology to bring ideas to life.
            Whether it’s developing an AI-powered automation tool or designing a
            modern web experience, my goal is to create solutions that matter.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="p-6 rounded-xl bg-white/70 dark:bg-gray-800 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-500">
              Frontend
            </h3>
            <p className="text-sm opacity-80">
              React, Next.js, Tailwind CSS, Framer Motion, TypeScript
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 dark:bg-gray-800 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-green-500">
              Backend
            </h3>
            <p className="text-sm opacity-80">
              Node.js, Express.js, MongoDB, SQL, JWT, REST APIs
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 dark:bg-gray-800 shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-purple-500">
              Other Tools
            </h3>
            <p className="text-sm opacity-80">
              Docker, Git, AI APIs
            </p>
          </div>
        </motion.div>

        {/* Personal Message */}
        <motion.div
          className="max-w-4xl mx-auto mt-20 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <blockquote className="italic text-lg md:text-xl border-l-4 pl-6 border-blue-600 dark:border-blue-400">
            "For me, coding isn’t just about syntax — it’s about turning ideas
            into experiences that inspire and empower."
          </blockquote>
          <p className="mt-4 font-semibold text-blue-500 text-md">
            — Afroj, Full Stack Developer
          </p>
          <p className="text-sm opacity-70">Builder • Designer • Innovator</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
