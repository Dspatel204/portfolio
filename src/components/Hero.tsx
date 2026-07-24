import { Button } from "@/components/ui/button";
import { Phone, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoLoop from "./LogoLoop";
import profileImage from "@/assets/profile-hero.jpeg";

const Hero = () => {
  const introPhrases = [
    "Hi There,",
    "I'm Dishant Patel",
    "I am into Frontend Development",
    "ReactJS Developer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = introPhrases[currentIndex];

    if (!isDeleting && displayText === currentPhrase) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1400);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      const changePhrase = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % introPhrases.length);
      }, 400);
      return () => window.clearTimeout(changePhrase);
    }

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }
    }, isDeleting ? 55 : 95);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, introPhrases]);

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20" id="home">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[0, 1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className={`absolute rounded-full blur-3xl opacity-30 ${item % 2 === 0 ? "bg-cyan-500/40" : "bg-fuchsia-500/30"}`}
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 50, 0],
              scale: [1, 1.15, 0.9, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + item,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item * 0.5,
            }}
            style={{
              width: item % 2 === 0 ? 220 : 300,
              height: item % 2 === 0 ? 220 : 300,
              left: `${12 + item * 18}%`,
              top: `${10 + item * 14}%`,
            }}
          />
        ))}
      </div>

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
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-accent"
            >
              Welcome
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="text">Dishant Patel</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-[2.4rem] rounded-full border border-accent/20 bg-white/5 px-4 py-2 text-lg md:text-xl font-semibold text-accent backdrop-blur-sm"
            >
              <span>{displayText}</span>
              <span className="ml-1 animate-pulse">|</span>
            </motion.div>
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

      {/* Logo Loop Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full mt-20 mb-12"
      >
        <LogoLoop />
      </motion.div>
    </section>
  );
};

export default Hero;
