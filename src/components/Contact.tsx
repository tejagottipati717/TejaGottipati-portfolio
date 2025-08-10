import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  Download
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tejateja717@gmail.com",
      href: "mailto:tejateja717@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9121906313",
      href: "tel:+919121906313"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/tejagottipati717",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tejagottipati1501",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://twitter.com/gottipatiteja",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-custom-lg">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send me a message</h3>
              
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                // TODO: Implement actual send logic here, e.g., API call or email service integration
                console.log('Send message:', { name, email, subject, message });
                alert('Message sending is not yet implemented. Please contact me directly via email.');
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-6 shadow-custom">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href === "#" ? undefined : info.href}
                    onClick={info.href === "#" ? (e) => e.preventDefault() : undefined}
                    className="flex items-center p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="text-primary mr-4 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 shadow-custom">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-lg hover:bg-secondary/50 transition-all group ${social.color}`}
                  >
                    <div className="mr-4 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.label}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="p-6 shadow-custom bg-gradient-primary text-white">
              <h3 className="text-xl font-semibold mb-4">Resume</h3>
              <p className="text-sm opacity-90 mb-6">
                Download my latest resume to learn more about my experience and qualifications.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={() => window.open('https://drive.google.com/file/d/12CcQsTgPfB02zyQOD6SIU3n3uDJKTzt9/view?usp=drive_link', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </Card>

            {/* Availability */}
            <Card className="p-6 shadow-custom bg-success-light border border-success/20">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-success">Available for Opportunities</h3>
              </div>
              <p className="text-sm text-success/80">
                I'm currently open to new opportunities including full-time positions, 
                freelance projects, and interesting collaborations.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;