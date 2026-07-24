import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
    };

    const handleMouseLeave = () => {
      setIsMouseMoving(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed w-3 h-3 bg-accent rounded-full z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          opacity: isMouseMoving ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          boxShadow: "0 0 12px rgba(255, 107, 107, 0.8), 0 0 24px rgba(255, 107, 107, 0.3)",
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed w-8 h-8 border border-accent rounded-full z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isMouseMoving ? 0.5 : 0,
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Trailing glow effect */}
      <motion.div
        className="pointer-events-none fixed w-6 h-6 rounded-full z-[9997]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isMouseMoving ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 1.5,
        }}
        style={{
          background: "radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)",
          boxShadow: "0 0 20px rgba(255, 107, 107, 0.2)",
        }}
      />

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
        a, button, input, textarea, select {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
