import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const LogoLoop = ({
  logos = [],
  speed = 80,
  direction = "left",
  logoHeight = 50,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#ffffff",
  ariaLabel = "Logo loop",
}) => {
  const groupRef = useRef(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(0);

  // Measure group width
  useLayoutEffect(() => {
    if (groupRef.current) {
      const scrollW = groupRef.current.scrollWidth;
      setWidth(scrollW > 0 ? scrollW : 1);
    }
  }, [logos, gap, logoHeight]);

  // Smooth looping logic
  useAnimationFrame((_, delta) => {
    if (pauseOnHover && isHovered) return;

    const moveBy = (direction === "left" ? -1 : 1) * speed * (delta / 1000);
    let newX = x.get() + moveBy;

    // Wrap when one full group moves out of view
    if (direction === "left" && newX <= -width) newX += width;
    if (direction === "right" && newX >= width) newX -= width;

    x.set(newX);
  });

  return (
    <div
      aria-label={ariaLabel}
      className="relative  max-md:w-70   w-full overflow-hidden"
      style={{
        maskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
          : "none",
        WebkitMaskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{ x }}
      >
        {/* Duplicate logos twice for seamless effect */}
        {[0, 1].map((i) => (
          <div
            key={i}
            ref={i === 0 ? groupRef : null}
            className="flex whitespace-nowrap"
            style={{
              gap: `${gap}px`,
              minWidth: "fit-content",
              paddingRight: `${gap}px`, // prevents touching at loop boundary
            }}
          >
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href={logo.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                whileHover={scaleOnHover ? { scale: 1.15 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{
                  height: logoHeight,
                  flexShrink: 0,
                  display: "inline-flex",
                }}
              >
                {logo.node ? (
                  <span className="text-4xl min-md:text-6xl">{logo.node}</span>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.alt || ""}
                    height={logoHeight}
                    width={logoHeight}
                    className="object-contain"
                  />
                )}
              </motion.a>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
