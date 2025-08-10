import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "/Pics/Tejapic.png";

const About = () => {
  const highlights = [
    "Software Development",
    "Python Programming",
    "Data Structures & Algorithms",
    "Web Development",
    "Cloud Technologies",
    "Machine Learning"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent Computer Science & Engineering graduate with solid expertise in software development, algorithms, debugging, and teamwork
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-custom-xl hover-glow">
                <img 
                  src={profilePhoto} 
                  alt="Teja Gottipati - Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-10 animate-float"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Card className="p-8 hover-lift bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Hello, I'm Teja!</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Recent Computer Science and Engineering graduate with solid expertise in software development, 
                  algorithms, debugging, and teamwork. Seeking Software Engineer role to deliver efficient, 
                  reliable solutions using modern technologies in a dynamic, learning-focused environment.
                </p>
                <p>
                  Graduated from Siddharth Institute of Engineering and Technology, Puttur, Andhra Pradesh 
                  with a CGPA of 8.56/10.00. My coursework included Data Structures & Algorithms, Software 
                  Development Lifecycle (SDLC), Network Technologies, and Integrated Development Environments (IDEs).
                </p>
                <p>
                  Through virtual internships with companies like Goldman Sachs, Salesforce, and AWS, I've gained 
                  hands-on experience in debugging, security analysis, cloud services, and modern development practices. 
                  I'm passionate about solving complex problems and contributing to meaningful projects.
                </p>
              </div>
            </Card>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;