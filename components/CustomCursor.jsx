"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: mouse.x - 15,
        y: mouse.y - 15,
        width: 30,
        height: 30,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,0,0.7)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
