"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{
            y: -20,                  // bounce
            scale: 1.5,               // enlarge => shape change
            letterSpacing: "0.5em",   // letter spacing => shape change
            fontWeight: 900,          // font weight => shape change
            color: "green",         // color change
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 0.3,
            },
          }}
          style={{ cursor: "pointer", display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
