import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Job Simulation",
      company: "New York Jobs CEO Council (Forage)",
      location: "Virtual",
      period: "February 2025",
      type: "Simulation",
      description: [
        "Completed challenging simulation focused on debugging and developing features",
        "Resolved critical bug in automated billing system by identifying root cause",
        "Developed code supporting note-taking feature on invoices",
        "Enhanced communication and transparency between senders and recipients"
      ],
      technologies: ["Python", "Debugging", "Code Comprehension"],
      verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9nvkLZzZEKAdrhjrX/7GYaMYxc6zEcbpjYL_9nvkLZzZEKAdrhjrX_pudzXoxAraiifkjek_1739807540091_completion_certificate.pdf"
    },
    {
      title: "Software Engineering Virtual Experience",
      company: "Goldman Sachs (Forage)",
      location: "Virtual",
      period: "February 2025",
      type: "Virtual Experience",
      description: [
        "Completed job simulation as Goldman Sachs governance analyst",
        "Assessed IT security and suggested improvements",
        "Identified outdated password hashing algorithm using Hashcat",
        "Wrote comprehensive memo summarizing proposed security uplifts"
      ],
      technologies: ["Cryptography", "Password Security", "Hashcat"],
      verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_pudzXoxAraiifkjek_1739805918212_completion_certificate.pdf"
    },
    {
      title: "Data Engineering Virtual Internship",
      company: "AICTE-EduSkills",
      location: "Virtual",
      period: "Sept - Nov 2023",
      type: "Internship",
      description: [
        "Architected sophisticated analytics framework within AWS",
        "Processed large-scale educational datasets",
        "Identified three critical improvement areas for future development",
        "Partnered with five academic advisors leveraging diverse expertise"
      ],
      technologies: ["AWS Cloud Services", "Cloud Security", "Cloud Architecture"],
      verifyUrl: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=9505338981bdd6f4e2cc3fad7fa4b10e"
    },
    {
      title: "Salesforce Developer Virtual Internship",
      company: "SmartInternz & AICTE",
      location: "Virtual",
      period: "Oct - Nov 2023",
      type: "Internship",
      description: [
        "Completed hands-on 8-week internship focused on Apex, SOQL, LWC",
        "Designed lead management component using Lightning Web Components",
        "Integrated REST API to auto-fetch data from third-party CRM",
        "Implemented field-level security and validation rules"
      ],
      technologies: ["Salesforce", "Apex", "LWC", "SOQL", "REST API"],
      verifyUrl: "https://smartinternz.com/internships/salesforce_certificates/3b796bac4dc055a7358cd28ae118eb09"
    },
    {
      title: "MathWorks Virtual Internship",
      company: "AICTE NEAT Cell | MathWorks India",
      location: "Virtual",
      period: "May - Sept 2023",
      type: "Internship",
      description: [
        "Completed certified virtual internship in Artificial Intelligence",
        "Gained hands-on experience with AI tools and workflows",
        "Developed understanding of AI basics and real-world applications",
        "Recognized by NEAT Cell (AICTE) and MathWorks India leadership"
      ],
      technologies: ["Artificial Intelligence", "MATLAB", "AI Tools"]
    },
    {
      title: "Bachelor of Technology in Computer Science",
      company: "Siddharth Institute of Engineering and Technology",
      location: "Puttur, Andhra Pradesh",
      period: "2020 - May 2024",
      type: "Education",
      description: [
        "CGPA: 8.56/10.00",
        "Data Structures and Algorithms, Software Development Lifecycle (SDLC)",
        "Network Technologies, Integrated Development Environments (IDEs)",
        "Active participant in coding competitions and technical events"
      ],
      technologies: ["Python", "Java", "JavaScript", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through education and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <Card className="p-6 hover-lift bg-white shadow-custom border-l-4 border-l-primary">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-primary font-medium mb-2">
                            <Building2 className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <Badge 
                          variant={exp.type === "Internship" ? "default" : "secondary"}
                          className="ml-4"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="text-xs bg-accent-light text-accent border-accent/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;