import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  GitBranch,
  Server,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "Java", level: 65 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 85 }
      ],
      technologies: ["Python", "JavaScript", "Java", "HTML5", "CSS3"]
    },
    {
      title: "Core Concepts",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Algorithms", level: 90 },
        { name: "Data Structures", level: 90 },
        { name: "Software Design", level: 85 },
        { name: "Testing & Debugging", level: 88 },
        { name: "SDLC", level: 80 }
      ],
      technologies: ["Algorithms", "Data Structures", "Design Principles", "Testing", "SDLC"]
    },
    {
      title: "Web & Systems",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Front-End Development", level: 85 },
        { name: "Back-End Development", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Cloud Services", level: 75 },
        { name: "Network Technologies", level: 70 }
      ],
      technologies: ["Frontend", "Backend", "REST APIs", "Cloud", "Networking"]
    },
    {
      title: "Tools & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Git & Version Control", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "SQL & MySQL", level: 85 },
        { name: "Agile Methodology", level: 80 },
        { name: "Technical Documentation", level: 85 }
      ],
      technologies: ["Git", "VS Code", "SQL", "MySQL", "Agile"]
    },
    {
      title: "Soft Skills",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Collaboration", level: 90 },
        { name: "Adaptability", level: 88 },
        { name: "Accountability", level: 85 }
      ],
      technologies: ["Leadership", "Teamwork", "Communication", "Analysis", "Learning"]
    }
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 85) return "bg-success";
    if (level >= 75) return "bg-primary";
    if (level >= 65) return "bg-warning";
    return "bg-muted";
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 85) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 65) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-lift bg-white shadow-custom">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                        <Badge 
                          variant="outline" 
                          className="text-xs px-2 py-0"
                        >
                          {getSkillLevelText(skill.level)}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-accent/10 text-accent border-accent/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-primary text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Professional Strengths</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-90">Programming Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8+</div>
                  <div className="text-sm opacity-90">Core Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-sm opacity-90">Tools & Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-sm opacity-90">Virtual Internships</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;