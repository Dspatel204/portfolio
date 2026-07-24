import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Next.js",
    "Shopify",
    "Tailwind CSS",
    "Node.js",
    "Bootstrap",
    "Mui",
    "Polaris",
    "Netlify",
    "Figma",
    "Photoshop",
  ];

  return (
    <section className="py-20 px-4 bg-portfolio-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg text-portfolio-text-subtle max-w-2xl mx-auto">
            Strong background in JavaScript frameworks and building responsive web applications
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 portfolio-hover-glow transition-all duration-300 cursor-pointer"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Core Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Technical Skills",
                text: "Strong background in JavaScript frameworks and building responsive web applications",
              },
              {
                icon: "🎯",
                title: "Problem Solving",
                text: "Experienced in creating dynamic solutions for complex web development challenges",
              },
              {
                icon: "🚀",
                title: "Innovation",
                text: "Passionate about leveraging cutting-edge technologies to deliver exceptional user experiences",
              },
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="space-y-4"
              >
                <div className="text-accent text-4xl">{strength.icon}</div>
                <h4 className="text-xl font-semibold">{strength.title}</h4>
                <p className="text-portfolio-text-subtle">{strength.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;