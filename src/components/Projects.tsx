import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Webly - Landing Page Builder",
      description: "Drag-and-drop landing page builder with responsive design capabilities. No coding skills required—design pixel-perfect pages for both mobile and desktop.",
      tags: ["React", "Drag & Drop", "Responsive Design", "Shopify Integration"],
      links: {
        demo: "https://apps.shopify.com/webly",
        github: "#"
      }
    },
    {
      title: "Navigo - Mobile Menu Bar",
      description: "Intuitive mobile menu navigation with customizable options, dropdown support, and analytics integration. Features 1000+ icons and custom styling options.",
      tags: ["React", "Mobile UI", "Analytics", "Custom Icons"],
      links: {
        demo: "https://apps.shopify.com/mobile-menu-bar",
        github: "#"
      }
    },
    {
      title: "Rates by Zipcode iWeb",
      description: "Advanced shipping rate management system with multi-currency support and detailed analytics. Handles unlimited shipping zones and postal codes.",
      tags: ["React", "E-commerce", "Multi-currency", "Analytics"],
      links: {
        demo: "https://main--dspatelpapp.netlify.app/",
        github: "#"
      }
    },
    {
      title: "LuvR Dating App",
      description: "Modern dating application with real-time messaging, user matching algorithms, and responsive design for optimal user experience.",
      tags: ["React", "Real-time", "Matching Algorithm", "Responsive"],
      links: {
        demo: "https://master--luvr-dating.netlify.app/",
        github: "#"
      }
    },
    {
      title: "AliquiZ Quiz Platform",
      description: "Interactive quiz platform with multiple question types, scoring system, and progress tracking for educational purposes.",
      tags: ["React", "Interactive UI", "Scoring System", "Education"],
      links: {
        demo: "https://master--aliquiz-play.netlify.app/",
        github: "#"
      }
    },
    {
      title: "QuizTop Challenge",
      description: "Competitive quiz application with leaderboards, timed challenges, and comprehensive performance analytics.",
      tags: ["React", "Competitive", "Leaderboards", "Analytics"],
      links: {
        demo: "https://master--quiztop.netlify.app/",
        github: "#"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-portfolio-text-subtle max-w-2xl mx-auto">
            Various web development projects and portfolio showcased online. Developed mobile menu bar apps, 
            responsive landing pages, and e-commerce sites to enhance user navigation and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-hover-glow transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-accent mb-3">{project.title}</h3>
                <p className="text-portfolio-text-subtle mb-4 flex-1">{project.description}</p>
                
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
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
          <Card className="portfolio-hover-glow transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-xl font-semibold text-accent mb-4">Your Achievement</h4>
              <p className="text-portfolio-text-subtle">
                Describe what you did and the impact it had. Highlight significant contributions to projects, 
                successful implementations, or recognition received for exceptional work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;