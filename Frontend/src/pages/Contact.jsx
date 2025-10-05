// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, User, MessageSquare } from "lucide-react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert("Message sent!");
//   };

//   return (
//     <div className="relative  flex items-center justify-center min-h-screen bg-gray-900 px-4">
//       {/* Subtle dark animated background */}
//       <motion.div
//         className="absolute  bg-gray-800/70 rounded-full blur-3xl"
//         animate={{
//           x: ["-5%", "5%", "-5%"],
//           y: ["-5%", "5%", "-5%"],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 25,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Glass Card with Left Panel */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-gray-700 shadow-2xl overflow-hidden"
//       >
//         {/* Left Panel */}
//         <div className="hidden md:flex flex-col items-center justify-center bg-gray-800/50 p-8 w-1/2 text-center text-gray-100">
//           <motion.div
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//             className="text-6xl mb-4"
//           >
//             👋
//           </motion.div>
//           <h3 className="text-2xl font-bold mb-2">Hey, There!</h3>
//           <p className="text-sm text-gray-300">
//             Excited to hear from you! Drop a message and let’s make something awesome together.
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="mt-4 inline-block text-sm font-medium bg-gray-700/40 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700/60 transition"
//           >
//             Say Hi 👆
//           </motion.div>
//         </div>

//         {/* Contact Form */}
//         <div className="flex-1 p-8">
//           <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-gray-100">
//             Contact Me
//           </h2>

//           <form onSubmit={submitHandler} className="flex flex-col gap-5">
//             <div className="flex flex-col gap-2">
//               <label className="text-sm flex items-center gap-2 text-gray-300">
//                 <User size={16} /> Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400 transition"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm flex items-center gap-2 text-gray-300">
//                 <Mail size={16} /> Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400 transition"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm flex items-center gap-2 text-gray-300">
//                 <MessageSquare size={16} /> Message
//               </label>
//               <textarea
//                 placeholder="Write your message..."
//                 rows="4"
//                 value={msg}
//                 onChange={(e) => setMsg(e.target.value)}
//                 className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400 transition"
//               />
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition"
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



"use client";
// // "use client";

 import { useState } from "react";
// import { motion } from "framer-motion";
 import { Mail, User, MessageSquare } from "lucide-react";


// import { useState } from "react";
import { motion } from "framer-motion";
import {  Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  // Floating icons animation variants
  const floatIcon = {
    initial: { y: 0, rotate: 0 },
    animate: { y: [0, -10, 0, 10, 0], rotate: [0, 15, -15, 0] },
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen  px-4 overflow-hidden py-10">
      {/* Background particles */}
      <motion.div
        className="absolute w-[200%] h-[200%]  rounded-full blur-3xl"
        animate={{ x: ["-5%", "5%", "-5%"], y: ["-5%", "5%", "-5%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-gray-700 shadow-2xl overflow-hidden"
      >
        {/* Left interactive panel */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-800/50 p-8 w-1/2 text-center text-gray-100 relative">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-6xl mb-4"
          >
            👋
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Hey There!</h3>
          <p className="text-sm text-gray-300 mb-6">
            Let's connect! Click any icon or fill the form to reach me.
          </p>

          {/* Floating social icons */}
          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com/"
              target="_blank"
              variants={floatIcon}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 0 }}
              className="text-gray-100 hover:text-cyan-400 transition"
            >
              <Github size={32} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              variants={floatIcon}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 0 }}
              className="text-gray-100 hover:text-cyan-400 transition"
            >
              <Linkedin size={32} />
            </motion.a>

            <motion.a
              href="mailto:yourmail@example.com"
              variants={floatIcon}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 0 }}
              className="text-gray-100 hover:text-cyan-400 transition"
            >
              <Mail size={32} />
            </motion.a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-gray-100">
            Contact Me
          </h2>

          <form onSubmit={submitHandler} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm flex items-center gap-2 text-gray-300">
                <User size={16} /> Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm flex items-center gap-2 text-gray-300">
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm flex items-center gap-2 text-gray-300">
                <MessageSquare size={16} /> Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-100 placeholder-gray-400 transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
