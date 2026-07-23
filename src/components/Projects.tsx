import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt as ExternalLink, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "kanvica jewellary",
      description:
        "Kanvika offers an elegant and curated collection of handcrafted jewelry—ranging from statement jhumkas and ornate neckpieces to oxidised silver bangles. The site mixes rich visuals with clear product specs (materials, dimensions, weight) and styling guidance, emphasizing quality craftsmanship and easy care. It’s tailored for shoppers seeking traditional, festive, or everyday ethnic pieces with a modern touch.",
      tags: ["React", "Interactive UI", "Scoring System", "Education"],
      links: {
        demo: "https://kanvika.netlify.app/",
        github: "https://github.com/Dspatel204/website",
      },
    },
    {
      title: "Product Grid",
      description:
        "Built a high-performance product grid with virtualization and smart caching. Edit state keyed by unique product IDs (Record<number, EditState>) to avoid data pollution from Virtualization DOM recycling. Cache keys computed via JSON.stringify(params) capturing { query, sortBy, order, category, skip } for accurate cached hits. Uses a lean state-driven virtualizer tracking scrollTop, rendering only a visual window plus 2-row buffer with CSS absolute translateY transforms for perfect 60fps performance over large datasets.",
      tags: ["React", "Virtualization", "Performance", "Data Grid"],
      links: {
        demo: "https://product-grid-table.vercel.app/",
        github: "https://github.com/Dspatel204/product-grid-table",
      },
    },
    {
      title: "CollegeHub - College Management System",
      description:
        "A full-stack college management system built with TanStack Start, React 19, Tailwind CSS v4, and shadcn/ui. Features include dashboard with stats and charts, student/faculty/course management, attendance tracking, fee management, exam management, library management, transport management, notices & messages, and reports & settings. Uses TanStack Router, TanStack Query v5, React Hook Form + Zod, Recharts, and Vite 7 + Nitro for Vercel deployment.",
      tags: ["React", "TanStack Start", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Vercel"],
      links: {
        demo: "https://college-management-beryl.vercel.app/",
        github: "https://github.com/Dspatel204/college-management",
      },
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-portfolio-text-subtle max-w-2xl mx-auto">
            Various web development projects and portfolio showcased online.
            Developed mobile menu bar apps, responsive landing pages, and
            e-commerce sites to enhance user navigation and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="portfolio-hover-glow transition-all duration-300 h-full flex flex-col"
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-accent mb-3">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-subtle mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-portfolio-surface px-2 py-1 rounded text-xs text-portfolio-text-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="accent"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.links.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <FaGithub className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Key Achievements
          </h3>
          <Card className="portfolio-hover-glow transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-xl font-semibold text-accent mb-4">
                Your Achievement
              </h4>
              <p className="text-portfolio-text-subtle">
                Describe what you did and the impact it had. Highlight
                significant contributions to projects, successful
                implementations, or recognition received for exceptional work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
