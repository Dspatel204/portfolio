import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  description: string;
}

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

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

  const onSubmit = (data: ContactFormData) => {
    // Create email content
    const emailSubject = `Portfolio Contact: Message from ${data.name}`;
    const emailBody = `
Name: ${data.name}
Email: ${data.email}

Message:
${data.description}
    `.trim();
    
    // Create SMS content
    const smsText = `Portfolio Contact from ${data.name} (${data.email}): ${data.description.substring(0, 100)}${data.description.length > 100 ? '...' : ''}`;
    
    // Open email client
    const mailtoLink = `mailto:dishant.sureshbhai@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_self');
    
    // Also provide SMS option
    const smsLink = `sms:+917600022951?body=${encodeURIComponent(smsText)}`;
    
    toast({
      title: "Message sent!",
      description: "Email client opened. You can also send via SMS if needed.",
      action: (
        <button 
          onClick={() => window.open(smsLink, '_self')}
          className="text-sm underline text-accent"
        >
          Send SMS instead
        </button>
      ),
    });
    
    // Reset the form
    form.reset();
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

        {/* Contact Form */}
        <Card className="portfolio-hover-glow transition-all duration-300">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Send Me a <span className="text-accent">Message</span>
              </h3>
              <p className="text-portfolio-text-subtle">
                Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ 
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Name can only contain letters and spaces"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  rules={{ 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    },
                    maxLength: {
                      value: 500,
                      message: "Message must not exceed 500 characters"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project, timeline, and any specific requirements..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-center">
                  <Button type="submit" variant="hero" size="lg" className="px-12">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;