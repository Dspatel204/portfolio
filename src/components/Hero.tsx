import { Button } from "@/components/ui/button";
import { Phone, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile-hero.jpeg";

const Hero = () => {
  const contactItems = [
    { icon: Phone, label: "7600022951", href: "tel:+917600022951" },
    { icon: Mail, label: "dishant.sureshbhai@gmail.com", href: "mailto:dishant.sureshbhai@gmail.com" },
    {
      icon: MapPin,
      label: "D503 Nilkanth Sky near dd sports circle variyav surat",
      href: "https://maps.app.goo.gl/KkBfHSJJo449RmFS9",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="w-80 h-80 rounded-full overflow-hidden portfolio-glow"
            >
              <img
                src={profileImage}
                alt="Dishant Patel"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text">Dishant Patel</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent">
              React JS Developer
            </h2>
          </div>

          <p className="text-lg text-portfolio-text-subtle max-w-lg">
            React JS Developer with over 3 years of experience building
            Shopify-native commerce applications, including drag-and-drop page
            builders, upsell and cross-sell tools, automated SEO solutions, and
            no-code product customizers. Skilled in React.js, Next.js,
            JavaScript, and TypeScript, with a strong track record of delivering
            pixel-perfect, mobile-responsive, conversion-focused features for
            e-commerce merchants.
          </p>

          <div className="space-y-3 text-portfolio-text-subtle">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 justify-center lg:justify-start hover:text-accent transition-colors"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <span>{item.label}</span>
                </motion.a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="tel:+917600022951"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5" />
                Hire Me
              </Button>
            </motion.a>
            <motion.a
              href="/Dishant_Patel_React_Developer.pdf"
              download="Dishant_Patel_React_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="outline" size="lg">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
