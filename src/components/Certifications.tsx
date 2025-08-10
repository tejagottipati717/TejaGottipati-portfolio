import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Project Management Fundamentals",
      issuer: "IBM",
      date: "November 2023",
      status: "Completed",
      description: "Comprehensive certification covering project management principles, methodologies, and best practices.",
      skills: ["Project Management", "Leadership", "Planning", "Risk Management"],
      credentialUrl: "https://www.credly.com/badges/389a8a57-2065-43db-be2e-43cd019b6cec/print",
      badgeColor: "bg-primary"
    },
    {
      title: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      date: "October 2023",
      status: "Completed",
      description: "Comprehensive course covering Python programming fundamentals and computational thinking.",
      skills: ["Python Programming", "Computational Thinking", "Problem Solving", "Programming Logic"],
      credentialUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS108S4487042620174406",
      badgeColor: "bg-success"
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "March 2023",
      status: "Completed",
      description: "Professional certification in designing and implementing Azure AI solutions and cognitive services.",
      skills: ["Azure AI", "Machine Learning", "Cognitive Services", "Cloud Computing"],
      credentialUrl: "https://learn.microsoft.com/en-gb/users/gottipatiteja-3621/credentials/49024764308fb6b3",
      badgeColor: "bg-warning"
    },
    {
      title: "21st Century Employability Skills Program",
      issuer: "APSCHE",
      date: "December 2023",
      status: "Completed",
      description: "Program focused on developing essential employability skills for the modern workforce.",
      skills: ["Communication", "Critical Thinking", "Digital Literacy", "Collaboration"],
      credentialUrl: "https://web.certificate.wfglobal.org/en/certificate?certificateId=657d5db68c30de8667bfa9ba",
      badgeColor: "bg-accent"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "In Progress":
        return <Calendar className="w-5 h-5 text-warning" />;
      default:
        return <Award className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
      case "In Progress":
        return <Badge className="bg-warning text-warning-foreground">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <section id="certifications" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover-lift bg-white shadow-custom">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${cert.badgeColor}`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>
                {getStatusBadge(cert.status)}
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                {getStatusIcon(cert.status)}
                <span className="ml-2">{cert.date}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs bg-primary/5 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {cert.status === "Completed" && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              )}

              {cert.status === "In Progress" && (
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 text-center">
                  <p className="text-sm text-warning font-medium">Currently in progress...</p>
                </div>
              )}

              {cert.status === "Planned" && (
                <div className="bg-muted/50 border border-muted rounded-lg p-3 text-center">
                  <p className="text-sm text-muted-foreground">Planned for completion</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-primary text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Certification Journey</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-sm opacity-90">Completed Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5</div>
                  <div className="text-sm opacity-90">Virtual Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-sm opacity-90">Technical Skills</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;