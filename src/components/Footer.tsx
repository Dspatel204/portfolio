import { FaEnvelope, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mailto:dishant.sureshbhai@gmail.com",
      label: "Email",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/dishant-patel-22a05a287?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Dspatel204",
      label: "GitHub",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 bg-portfolio-surface/50 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold mb-4 cursor-pointer"
          >
            <span className="text-accent">Dishant</span> Patel
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-portfolio-text-subtle mb-6"
          >
            React JS Developer passionate about creating exceptional web
            experiences
          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-portfolio-surface rounded-full hover:bg-accent/20 transition-colors duration-300 group"
                >
                  <Icon className="h-5 w-5 text-portfolio-text-subtle group-hover:text-accent transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-8 text-center origin-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-portfolio-text-subtle flex items-center justify-center gap-2"
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="h-4 w-4 text-accent fill-accent" />
            </motion.span>
            by Dishant Patel © {currentYear}
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
