import { Button } from "@/components/ui/button";
import { Phone, Download, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const handleCall = () => {
    window.open("tel:+917600022951", "_self");
  };

  const handleDownloadCV = () => {
    // Create a downloadable link for the CV
    const link = document.createElement("a");
    link.href = "#"; // You can replace this with actual CV file path
    link.download = "Dishant_Patel_CV.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden portfolio-glow">
              <img 
                src={profileImage} 
                alt="Dishant Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I Am <span className="text-accent">Dishant Patel</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent">
              React JS Developer
            </h2>
          </div>

          <p className="text-lg text-portfolio-text-subtle max-w-lg">
            Experienced React JS Developer with a strong background in creating dynamic web applications. 
            I excel at crafting responsive designs tailored for various platforms, delivering exceptional user experiences.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-portfolio-text-subtle">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Phone className="h-5 w-5 text-accent" />
              <span>7600022951</span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Mail className="h-5 w-5 text-accent" />
              <span>dishant.sureshbhai@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <MapPin className="h-5 w-5 text-accent" />
              <span>D503 Nilkanth Sky near dd sports circle variyav surat</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" onClick={handleCall}>
              <Phone className="h-5 w-5" />
              Hire Me
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadCV}>
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;