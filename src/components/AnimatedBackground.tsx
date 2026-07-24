import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        {/* Blob 1 - Top Left */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.2, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob 2 - Top Right */}
        <motion.div
          className="absolute -top-20 -right-32 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -80, 0],
            scale: [1, 0.9, 1.1, 1],
            opacity: [0.3, 0.4, 0.2, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Blob 3 - Bottom Left */}
        <motion.div
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -100, 0],
            y: [0, 80, -120, 0],
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.25, 0.35, 0.15, 0.25],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Blob 4 - Bottom Right */}
        <motion.div
          className="absolute -bottom-32 -right-40 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 80, 0],
            y: [0, -80, 100, 0],
            scale: [1, 0.95, 1.15, 1],
            opacity: [0.25, 0.4, 0.2, 0.25],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Radial gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
