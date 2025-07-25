import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weblly ‑ Landing Page Builder",
      description:
        "Drag-and-drop landing page builder with responsive design capabilities. No coding skills required—design pixel-perfect pages for both mobile and desktop.Effortlessly create responsive and beautiful landing pages to enhance your online presence and sales",
      tags: [
        "React",
        "Drag & Drop",
        "Responsive Design",
        "Shopify Integration",
      ],
      links: {
        demo: "https://apps.shopify.com/weblly",
        github: "#",
      },
    },
    {
      title: "Navigo - Mobile Menu Bar",
      description:
        "Intuitive mobile menu navigation with customizable options, dropdown support, and analytics integration. Features 1000+ icons and custom styling options.",
      tags: ["React", "Mobile UI", "Analytics", "Custom Icons"],
      links: {
        demo: "https://apps.shopify.com/mobile-menu-bar",
        github: "#",
      },
    },
    {
      title: "Shipping Rates by Zipcode iWeb",
      description:
        "Advanced shipping rate management system with multi-currency support and detailed analytics. Handles unlimited shipping zones and postal codes.Set shipping rates by Zipcode/postal code, cart total price & weight based in your store.",
      tags: ["React", "E-commerce", "Multi-currency", "Analytics"],
      links: {
        demo: "https://apps.shopify.com/rates-by-zipcode-iweb",
        github: "#",
      },
    },
    {
      title: "LuvR Dating App",
      description:
        "Modern dating application with real-time messaging, user matching algorithms, and responsive design for optimal user experience.",
      tags: ["React", "Real-time", "Matching Algorithm", "Responsive"],
      links: {
        demo: "https://master--luvr-dating.netlify.app/",
        github: "#",
      },
    },
    {
      title: "Empower Your Business",
      description:
        "CoreTech Innovations delivers cutting-edge technology services tailored for today's fast-paced world. Our platform offers seamless real-time communications, AI-driven analytics, and resilient cloud infrastructure—all wrapped in a responsive, user-centric design. Whether you're scaling operations or refining your digital presence, CoreTech equips you with intelligent, data-powered tools for growth, efficiency, and innovation.",
      tags: ["React", "Real-time", "Matching Algorithm", "Responsive"],
      links: {
        demo: "https://dspatelapp.netlify.app/",
        github: "https://github.com/Dspatel204/coretechweb",
      },
    },
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
      title: "Shipping Rates Compare",
      description:
        "A powerful Shopify app for comparing real-time shipping rates from multiple carriers (FedEx, UPS, USPS, Saia, ABF, and more). Key features include AI-powered packing, bulk label generation, order syncing, real-time parcel & freight quotes at checkout, and a centralized dashboard for fulfillment tracking and insights.",
      tags: [
        "Real-Time Rates",
        "AI Packing",
        "Bulk Labels",
        "Order Syncing",
        "Freight & Parcel",
        "Carrier Comparison",
        "Fulfillment Automation",
      ],
      links: {
        demo: "https://apps.shopify.com/shipping-rates-compare",
        github: null,
      },
    },
    {
      title: "AutopilotSEO",
      description:
        "AI‑powered blog automation that generates, optimizes, and publishes SEO‑friendly articles directly from your Shopify admin. Powered by smart internal linking, keyword strategies, metadata enhancements, and image creation, it drives organic traffic and saves you hours of content creation.",
      tags: ["Shopify", "AI", "Blog Automation", "SEO"],
      links: {
        demo: "https://apps.shopify.com/autopilotseo",
        github: null,
      },
    },
    {
      title: "AD Scroll To Top",
      description:
        "A lightweight Shopify app that enhances user navigation by adding a fully customizable 'scroll to top' button—no coding required. Key features include WYSIWYG button designer, adjustable size/position/style/transparency, real-time preview, and theme-wide compatibility. Ideal for improving user experience and reducing bounce on long pages.",
      tags: [
        "Customizable",
        "No-Code",
        "Real-Time Preview",
        "User Experience",
        "Bounce Reduction",
        "Lightweight",
      ],
      links: {
        demo: "https://apps.shopify.com/ad-scroll-to-top",
        github: null,
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
                    <Github className="h-4 w-4" />
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
