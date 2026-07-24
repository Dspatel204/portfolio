import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const LogoLoop = () => {
  const logos = [
    { Icon: SiReact, label: "React", color: "text-blue-400" },
    { Icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { Icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
    { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  ];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold mb-2">
          Tech Stack <span className="text-accent">I Work With</span>
        </h3>
        <p className="text-portfolio-text-subtle">Modern tools for modern development</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-8 md:gap-12"
      >
        {logos.map((item, index) => {
          const Icon = item.Icon;
          return (
            <motion.div
              key={item.label}
              custom={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
                rotateZ: 10,
                filter: "drop-shadow(0 0 12px rgba(255, 107, 107, 0.5))",
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateZ: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon className={`h-14 w-14 md:h-16 md:w-16 ${item.color} transition-all duration-300`} />
                </div>

                {/* Label on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs md:text-sm font-semibold text-accent whitespace-nowrap"
                >
                  {item.label}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Animated line under logos */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mt-12 origin-center"
      />
    </div>
  );
};

export default LogoLoop;
