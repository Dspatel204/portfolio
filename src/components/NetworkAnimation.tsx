import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const NetworkAnimation = () => {
  const { theme } = useTheme();

  // Generate random nodes
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 2,
  }));

  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-background">
      {/* SVG for connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
        <defs>
          <linearGradient
            id="lineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor={isDark ? "#ff6b6b" : "#ff8787"}
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor={isDark ? "#4ecdc4" : "#26d0ce"}
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {/* Generate connecting lines between random nodes */}
        {nodes.slice(0, 8).map((node, idx) => {
          const nextNode = nodes[(idx + 1) % nodes.length];
          return (
            <line
              key={`line-${idx}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity="0.4"
            />
          );
        })}
      </svg>

      {/* Animated nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full blur-sm ${
            isDark ? "bg-accent/40" : "bg-accent/30"
          }`}
          style={{
            width: `${node.size * 8}px`,
            height: `${node.size * 8}px`,
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient blobs for background depth */}
      <motion.div
        className={`absolute w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDark ? "bg-cyan-500/40" : "bg-cyan-400/30"
        }`}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: "10%",
          top: "10%",
        }}
      />
      <motion.div
        className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? "bg-fuchsia-500/30" : "bg-pink-400/25"
        }`}
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 23,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          right: "10%",
          top: "20%",
        }}
      />
    </div>
  );
};

export default NetworkAnimation;
