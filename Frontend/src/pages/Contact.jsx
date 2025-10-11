
// "use client";
// // // "use client";

//  import { useState } from "react";
// // import { motion } from "framer-motion";
//  import { Mail, User, MessageSquare } from "lucide-react";


// // import { useState } from "react";
// import { motion } from "framer-motion";
// import {  Github, Linkedin } from "lucide-react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert("Message sent!");
//   };

//   // Floating icons animation variants
//   const floatIcon = {
//     initial: { y: 0, rotate: 0 },
//     animate: { y: [0, -10, 0, 10, 0], rotate: [0, 15, -15, 0] },
//     transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen  px-4 overflow-hidden py-10">
//       {/* Background particles */}
//       <motion.div
//         className="absolute w-[200%] h-[200%]  rounded-full blur-3xl"
//         animate={{ x: ["-5%", "5%", "-5%"], y: ["-5%", "5%", "-5%"] }}
//         transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
//       />

//       {/* Glassmorphic Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-gray-700 shadow-2xl overflow-hidden"
//       >
//         {/* Left interactive panel */}
//         <div className="hidden md:flex flex-col items-center justify-center bg-gray-800/50 p-8 w-1/2 text-center text-gray-100 relative">
//           <motion.div
//             animate={{ rotate: [0, 15, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//             className="text-6xl mb-4"
//           >
//             👋
//           </motion.div>
//           <h3 className="text-2xl font-bold mb-2">Hey There!</h3>
//           <p className="text-sm text-gray-300 mb-6">
//             Let's connect! Click any icon or fill the form to reach me.
//           </p>

//           {/* Floating social icons */}
//           <div className="flex gap-6 justify-center">
//             <motion.a
//               href="https://github.com/"
//               target="_blank"
//               variants={floatIcon}
//               initial="initial"
//               animate="animate"
//               whileHover={{ scale: 1.2, rotate: 0 }}
//               className="text-gray-100 hover:text-cyan-400 transition"
//             >
//               <Github size={32} />
//             </motion.a>

//             <motion.a
//               href="https://linkedin.com/"
//               target="_blank"
//               variants={floatIcon}
//               initial="initial"
//               animate="animate"
//               whileHover={{ scale: 1.2, rotate: 0 }}
//               className="text-gray-100 hover:text-cyan-400 transition"
//             >
//               <Linkedin size={32} />
//             </motion.a>

//             <motion.a
//               href="mailto:yourmail@example.com"
//               variants={floatIcon}
//               initial="initial"
//               animate="animate"
//               whileHover={{ scale: 1.2, rotate: 0 }}
//               className="text-gray-100 hover:text-cyan-400 transition"
//             >
//               <Mail size={32} />
//             </motion.a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="flex-1 px-5 py-3">
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




// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import emailjs from "emailjs-com";
// import { motion } from "framer-motion";

// function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_72innvp",
//         "template_xurnl1e",
//         e.target,
//         "KQmRqRad-nZh4mllW"
//       )
//       .then(
//         (result) => {
//           toast.success("Success!", {
//   position: "top-center",
//   autoClose: 3000,
//    pauseOnHover: true,
//   theme: "colored"
// });

//         },
//         (error) => {
//           toast.error("Failed to send a message", {
//   position: "bottom-right",
//   autoClose: 5000,
//   theme: "colored",
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
  
// });

//         }
//       );
//   };

//   const notify = () => {
//     toast.error("Failed to send message", {
//   position: "bottom-right",
//   autoClose: 5000,
//   theme: "colored",
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true
// });

//   }


//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (




//     <>





//       <div className=" max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Left: Contact Info */}
//         <motion.div
//           className="space-y-10"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl lg:mt-50 max-md:text-center font-bold text-gray-800 dark:text-gray-100">
//             Get in Touch
//           </h2>
//           <p className="text-gray-800 dark:text-gray-300">
//             Have questions or need assistance? Reach out to us through the form or
//             use the details below.
//           </p>

//           <div className="space-y-6">

//             <a

//               href="tel:+919921928678"
//               target="_blank"
//               rel="noopener noreferrer"

//             >
//               {/* Phone */}
//               <motion.div
//                 className="flex max-md:-ml-16 max-md:justify-center max-md:items-center items-start space-x-4"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 120 }}
//               >
//                 <div className="p-1  bg-green-100 dark:bg-green-900 rounded-lg">
//                   <div className="p-1 bg-green-100 dark:bg-green-900 rounded-lg">
//                     <svg
//                       className="w-6 h-6 text-green-600 dark:text-green-300"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.667 4.998a1 1 0 01-.217 1.02L8.664 11.664a16.014 16.014 0 006.672 6.672l1.958-1.958a1 1 0 011.02-.217l4.998 1.667a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C8.954 21 3 15.046 3 8V5z"
//                       />
//                     </svg>
//                   </div>

//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800 dark:text-gray-100">
//                     Call Us
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-200">+91 9921928678</p>
//                 </div>
//               </motion.div>
//             </a>

//             <a

//               href="https://mail.google.com/mail/?view=cm&fs=1&to=dentbuddy01@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"

//             >
//               {/* Email */}
//               <motion.div
//                 className="flex mt-2 max-md:justify-center max-md:items-center items-start space-x-4"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 120 }}
//               >
//                 <div className="p-2  bg-purple-100 dark:bg-purple-900 rounded-lg">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-purple-600 dark:text-purple-300"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16 12H8m0 0l-4-4m4 4l-4 4m16-4h-8M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"
//                     />
//                   </svg>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-800 dark:text-gray-200">
//                     Email Us
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     dentbuddy01@gmail.com
//                   </p>
//                 </div>
//               </motion.div>

//             </a>
//           </div>
//         </motion.div>

//          <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>


//         {/* Right: Contact Form */}
//         <motion.form
//           onSubmit={sendEmail}
//           className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h3 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
//             Send Us a Message
//           </h3>

//           {/* Name & Email in Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm text-gray-700 dark:text-gray-200">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="John Doe"
//                 className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//           focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//           text-gray-800 dark:text-gray-100"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-700 dark:text-gray-200">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="you@example.com"
//                 className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//           focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//           text-gray-800 dark:text-gray-100"
//                 required
//               />
//             </div>
//           </div>

//           {/* Subject */}
//           <div>
//             <label className="block text-sm text-gray-700 dark:text-gray-200">
//               Subject
//             </label>
//             <input
//               type="text"
//               name="feedback"
//               placeholder="How can we help you?"
//               className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//         focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//         text-gray-800 dark:text-gray-100"
//               required
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm text-gray-700 dark:text-gray-200">
//               Message
//             </label>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Write your message..."
//               className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//         focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//         text-gray-800 dark:text-gray-100"
//               required
//             ></textarea>
//           </div>

//           {/* Button */}
//           <motion.button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 
//       rounded-lg shadow-md"
//             whileHover={{ scale: 1.05, }}
//             transition={{ type: "spring", stiffness: 120 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>




//     </>

//   );
// }




// export default Contact



// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import emailjs from "emailjs-com";
// import { motion } from "framer-motion";

// function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const subject = form.feedback.value.trim();
//     const message = form.message.value.trim();

//     // Extra UX: Prevent empty submissions
//     if (!name || !email || !subject || !message) {
//       toast.warning("⚠️ Please fill out all fields", {
//         position: "top-center",
//         autoClose: 3000,
//         pauseOnHover: true,
//         theme: "colored",
//       });
//       return;
//     }

//     emailjs
//       .sendForm(
//         "",
//         "",
//         form,
//         ""
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully!", {
//             position: "top-center",
//             autoClose: 3000,
//             pauseOnHover: true,
//             theme: "colored",
//           });
//           form.reset(); // Clear form after success
//         },
//         () => {
//           toast.error("Failed to send message. Try again later.", {
//             position: "bottom-right",
//             autoClose: 4000,
//             theme: "colored",
//           });
//         }
//       );
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       {/* Toast Container at the root */}
//       <ToastContainer />

//       <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
       

//         {/* Right: Contact Form */}
//         <motion.form
//           onSubmit={sendEmail}
//           className=" dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6 outline outline-blue-400 px-10"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h3 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
//             Send Me a Message
//           </h3>

//           {/* Name & Email */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm text-gray-700 dark:text-gray-200">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="John Doe"
//                 className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//                 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//                 text-gray-800 dark:text-gray-100"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-700 dark:text-gray-200">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="you@example.com"
//                 className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//                 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//                 text-gray-800 dark:text-gray-100"
//                 required
//               />
//             </div>
//           </div>

//           {/* Subject */}
//           <div>
//             <label className="block text-sm text-gray-700 dark:text-gray-200">
//               Subject
//             </label>
//             <input
//               type="text"
//               name="feedback"
//               placeholder="How can we help you?"
//               className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//               focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 
//               text-gray-800 dark:text-gray-100"
//               required
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm text-gray-700 dark:text-gray-200">
//               Message
//             </label>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Write your message..."
//               className="mt-2 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
//               focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 
//               text-gray-800 dark:text-gray-100"
//               required
//             ></textarea>
//           </div>

//           {/* Button */}
//           <motion.button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 
//             rounded-lg shadow-md hover:shadow-lg transition"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 120 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </>
//   );
// }

// export default Contact;



import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const FuturisticStick = ({ baseX, color }) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const eyeX = useMotionValue(0);
  const eyeY = useMotionValue(0);
  const smoothX = useSpring(eyeX, { stiffness: 60, damping: 12 });
  const smoothY = useSpring(eyeY, { stiffness: 60, damping: 12 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      const dx = e.clientX - baseX;
      const dy = e.clientY - 300;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(10, Math.hypot(dx, dy) / 50);
      eyeX.set(Math.cos(angle) * dist);
      eyeY.set(Math.sin(angle) * dist);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [baseX, eyeX, eyeY]);

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: baseX / 600, duration: 0.8 }}
    >
      {/* Neon Aura */}
      <motion.div
        className="absolute blur-3xl rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}33, transparent 60%)`,
          width: "160px",
          height: "160px",
          top: "-40px",
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Futuristic body */}
      <motion.div
        className="relative flex flex-col items-center"
        animate={{
          y: [0, -5, 0],
          scaleY: [1, 1.03, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Head */}
        <div className="relative">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <defs>
              <radialGradient id={`glow-${baseX}`} r="70%">
                <stop offset="0%" stopColor={color} stopOpacity="0.9" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle
              cx="45"
              cy="45"
              r="35"
              fill={`url(#glow-${baseX})`}
              stroke={color}
              strokeWidth="1.5"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </svg>
          {/* Eyes */}
          <div className="absolute inset-0 flex justify-center items-center gap-8">
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="w-3 h-3 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.8)]"
            />
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="w-3 h-3 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>

        {/* Body line */}
        <div
          className="w-[3px] h-[250px] mt-2 rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${color}, transparent)`,
            boxShadow: `0 0 15px ${color}`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      toast.warning("⚠️ Please fill out all fields", { position: "top-center" });
      return;
    }

    emailjs
      .sendForm("", "", form, "")
      .then(() => toast.success("Message sent successfully!"))
      .catch(() => toast.error("Failed to send message."));
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      <ToastContainer />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,100,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
        {/* Left – 3 futuristic figures */}
        <div className="hidden lg:flex justify-around items-center">
          <FuturisticStick baseX={300} color="#3b82f6" />
          <FuturisticStick baseX={600} color="#22d3ee" />
          <FuturisticStick baseX={900} color="#a855f7" />
        </div>

        {/* Right – Form */}
        <motion.form
          onSubmit={sendEmail}
          className="bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-blue-400/30 shadow-[0_0_40px_5px_rgba(59,130,246,0.2)] space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400 text-center">
            Contact Portal
          </h2>
          <p className="text-gray-400 text-center text-sm">
            Your message will be transmitted through encrypted neural channels 🧠✨
          </p>

          {["name", "email", "subject"].map((field, idx) => (
            <input
              key={idx}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full bg-transparent border border-gray-700 focus:border-blue-400 rounded-lg px-4 py-3 text-gray-200 focus:outline-none"
              required
            />
          ))}

          <textarea
            name="message"
            placeholder="Type your message..."
            rows="5"
            className="w-full bg-transparent border border-gray-700 focus:border-blue-400 rounded-lg px-4 py-3 text-gray-200 focus:outline-none"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #3b82f6" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white shadow-md"
          >
            Send Transmission 🚀
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
