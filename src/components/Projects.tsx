import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "URL Shortener Service",
      description: "Built a web app to shorten long URLs into 6-character codes with URL validation. Created in-memory storage to track clicks and link data without a database.",
      image: project1,
      technologies: ["Python", "Flask", "Pytest"],
      features: [
        "URL validation and 6-character code generation",
        "In-memory storage for click tracking",
        "RESTful API endpoints for shortening and analytics",
        "Unit tests for reliability and correctness"
      ],
      githubUrl: "https://github.com/tejagottipati717/URL-Shortener",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Dynamic Weather Interface",
      description: "Developed a dynamic web interface to visualize weather information using core web technologies, focusing on responsive design and user-centered layout.",
      image: project2,
      technologies: ["HTML", "CSS"],
      features: [
        "Responsive design with user-centered layout",
        "Advanced CSS for styling and UI enhancements",
        "Clear file organization and documentation",
        "Foundational web application structure"
      ],
      githubUrl: "https://github.com/tejagottipati717/Dynamic-weather-Interface",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Interactive Memory Game",
      description: "Developed an interactive memory game using HTML5 Canvas and custom animations. Enhanced gameplay responsiveness and ensured browser compatibility.",
      image: project3,
      technologies: ["HTML5 Canvas", "JavaScript", "Local Storage"],
      features: [
        "HTML5 Canvas with custom animations",
        "30ms gameplay responsiveness",
        "98% browser compatibility",
        "Adaptive difficulty and local storage"
      ],
      githubUrl: "https://github.com/tejagottipati717/Memory-Game",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "ATM System with Exception Handling",
      description: "Built Python ATM system with 99.97% transaction reliability, handling multiple complex exceptions and reducing system interruptions.",
      image: project1,
      technologies: ["Python", "Exception Handling", "User Interface"],
      features: [
        "99.97% transaction reliability",
        "Multi-layered exception management",
        "85% reduction in system interruptions",
        "User-friendly error messaging system"
      ],
      githubUrl: "https://github.com/tejagottipati717/ATM-Project-by-Exceptions.git",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Smart Railway Safety Solutions",
      description: "Created an ML model using unsupervised clustering to detect safety anomalies in railway stations. Detected previously unidentified safety issues.",
      image: project2,
      technologies: ["Machine Learning", "Python", "Clustering", "Data Analysis"],
      features: [
        "Unsupervised clustering for anomaly detection",
        "27 previously unidentified safety issues detected",
        "45% reduction in response times",
        "Operational data transformation into actionable insights"
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift bg-white shadow-custom group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === "Completed" 
                      ? "bg-success text-success-foreground" 
                      : "bg-warning text-warning-foreground"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="text-xs bg-primary/5 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('https://github.com/tejagottipati717', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;