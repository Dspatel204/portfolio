import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "React JS Developer",
      company: "AD Digitech",
      period: "Jan 2024 - Present",
      location: "Current Position",
      achievements: [
        "Developed a landing page builder with drag-and-drop functionality",
        "Created carrier service provider app for Shopify orders using services like old domain fedex ups",
        "Built drag and drop functionality with panel, mobile menu and scroll in Shopify theme extension",
      ],
    },
    {
      title: "React JS Developer",
      company: "Identixweb Pvt Ltd",
      period: "Oct 2022 - Aug 2023",
      location: "Web development company",
      achievements: [
        "Set shipping rates for different zones based on zip codes or postal codes",
        "Set shipping charge based on multiple shipping rate rules",
        "Set shipping rates for specific shipping zone based on cart total price with multicurrency support",
        "Add unlimited shipping zones and zipcodes for adding shipping charges",
      ],
    },
    {
      title: "Web Developer",
      company: "Infinity Softech",
      period: "Mar 2022 - Sep 2022",
      location: "Technology services company",
      achievements: [
        "Created e-commerce functionalities including discount features",
        "Developed task management functionalities with priority filters",
        "Converted designs from Figma and Photoshop to responsive websites",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Summary */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg text-portfolio-text-subtle max-w-3xl mx-auto leading-relaxed">
            I am a dedicated React JS developer with a strong background in creating dynamic web applications. 
            I have hands-on experience working with diverse technologies like Shopify and Next JS, and I excel at 
            crafting responsive designs tailored for various platforms. My goal is to leverage my skills in HTML, 
            CSS, JavaScript, and TypeScript to deliver exceptional user experiences.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="portfolio-hover-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold text-accent">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-portfolio-text-subtle mt-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-portfolio-text-subtle mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-portfolio-text-subtle">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-portfolio-text-subtle">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <Card className="portfolio-hover-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-accent mb-2">Bachelor Of Science</h4>
                <p className="text-portfolio-text-subtle mb-2">P L Chachun Science College</p>
                <div className="flex items-center gap-2 justify-center text-portfolio-text-subtle">
                  <Calendar className="h-4 w-4" />
                  <span>Mar 2019 - Mar 2022</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;