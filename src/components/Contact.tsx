import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleCall = () => {
    window.open("tel:+917600022951", "_self");
    toast({
      title: "Opening phone app...",
      description: "Initiating call to +91 7600022951",
    });
  };

  const handleEmail = () => {
    window.open("mailto:dishant.sureshbhai@gmail.com", "_self");
    toast({
      title: "Opening email client...",
      description: "Composing email to dishant.sureshbhai@gmail.com",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917600022951?text=Hi%20Dishant,%20I'm%20interested%20in%20your%20services", "_blank");
    toast({
      title: "Opening WhatsApp...",
      description: "Starting conversation on WhatsApp",
    });
  };

  const handleDownloadCV = () => {
    toast({
      title: "Download initiated",
      description: "Your CV download will start shortly",
    });
    // Here you would typically handle the actual file download
  };

  return (
    <section id="contact" className="py-20 px-4 bg-portfolio-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-portfolio-text-subtle max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your ideas to life. 
            I'm always excited to work on new challenges and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="portfolio-hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-portfolio-text-subtle">+91 7600022951</p>
                  </div>
                </div>
                <Button variant="accent" size="sm" onClick={handleCall} className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="portfolio-hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-portfolio-text-subtle">dishant.sureshbhai@gmail.com</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={handleEmail} className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="portfolio-hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-portfolio-text-subtle">
                      D503 Nilkanth Sky near dd sports circle variyav surat
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="portfolio-hover-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-4">Ready to work together?</h3>
                <p className="text-portfolio-text-subtle mb-6">
                  I'm available for freelance projects and full-time opportunities. 
                  Let's create something amazing together!
                </p>
                <div className="space-y-3">
                  <Button variant="hero" size="lg" onClick={handleCall} className="w-full">
                    <Phone className="h-5 w-5" />
                    Call Me Now
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleWhatsApp} className="w-full">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="secondary" size="lg" onClick={handleDownloadCV} className="w-full">
                    <Download className="h-5 w-5" />
                    Download My CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="portfolio-hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Professional Interests</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-portfolio-text-subtle">Career Interest / Passion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-portfolio-text-subtle">React JS Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-portfolio-text-subtle">E-commerce Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-portfolio-text-subtle">Mobile-First Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;