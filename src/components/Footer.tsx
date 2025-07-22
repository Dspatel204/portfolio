import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-portfolio-surface/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-accent">Dishant</span> Patel
          </h3>
          <p className="text-portfolio-text-subtle mb-6">
            React JS Developer passionate about creating exceptional web experiences
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:dishant.sureshbhai@gmail.com"
              className="p-3 bg-portfolio-surface rounded-full hover:bg-accent/20 transition-colors duration-300 group"
            >
              <Mail className="h-5 w-5 text-portfolio-text-subtle group-hover:text-accent transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 bg-portfolio-surface rounded-full hover:bg-accent/20 transition-colors duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-portfolio-text-subtle group-hover:text-accent transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 bg-portfolio-surface rounded-full hover:bg-accent/20 transition-colors duration-300 group"
            >
              <Github className="h-5 w-5 text-portfolio-text-subtle group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-portfolio-text-subtle flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> by Dishant Patel © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;