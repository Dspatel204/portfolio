import { Badge } from "@/components/ui/badge";

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-lg text-portfolio-text-subtle max-w-2xl mx-auto">
            Strong background in JavaScript frameworks and building responsive web applications
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {technicalSkills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-lg px-4 py-2 portfolio-hover-glow transition-all duration-300 cursor-pointer"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Strengths */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Core Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-accent text-4xl">⚡</div>
              <h4 className="text-xl font-semibold">Technical Skills</h4>
              <p className="text-portfolio-text-subtle">
                Strong background in JavaScript frameworks and building responsive web applications
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-accent text-4xl">🎯</div>
              <h4 className="text-xl font-semibold">Problem Solving</h4>
              <p className="text-portfolio-text-subtle">
                Experienced in creating dynamic solutions for complex web development challenges
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-accent text-4xl">🚀</div>
              <h4 className="text-xl font-semibold">Innovation</h4>
              <p className="text-portfolio-text-subtle">
                Passionate about leveraging cutting-edge technologies to deliver exceptional user experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;