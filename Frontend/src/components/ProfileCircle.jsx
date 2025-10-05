

import React from "react";
import { motion, useAnimation } from "framer-motion";

// SVG Blob generator

const ProfileCircle = ({ imageSrc,size=250 }) => {
return (
    <div className="relative flex justify-center items-center mt-20">
      {/* Soft wavy background */}
      <svg
        width={size * 1.8}
        height={size * 1.8}
        viewBox="0 0 500 500"
        className="absolute top-0 left-0 z-0"
      >
        <motion.path
          fill="url(#gradient1)"
          d="M250,50 C350,50 450,150 400,250 C350,350 150,350 100,250 C50,150 150,50 250,50 Z"
          animate={{
            d: [
              "M250,50 C350,50 450,150 400,250 C350,350 150,350 100,250 C50,150 150,50 250,50 Z",
              "M250,50 C370,70 430,180 390,260 C340,360 160,340 110,250 C60,160 150,50 250,50 Z",
              "M250,50 C360,60 440,160 400,250 C350,340 150,360 120,250 C60,150 140,40 250,50 Z",
            ],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8e2de2" />
            <stop offset="100%" stopColor="#4a00e0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Circular Profile */}
      <motion.img
        src={imageSrc}
        alt="Profile"
        className="rounded-full border-4 border-white shadow-xl z-10 object-cover"
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ type: "spring", stiffness: 120 }}
      />
    </div>
  );
};

export default ProfileCircle;
