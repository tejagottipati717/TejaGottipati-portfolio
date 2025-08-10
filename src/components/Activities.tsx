import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, FileText } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      title: "Ranked #439 in Naukri Campus All India NCAT Competition",
      description: [
        "Solved 83% of complex technical challenges across 250+ participating teams."
      ],
      icon: Award,
      type: "Competition",
      period: "",
      location: ""
    },
    {
      title: "Solved intricate Sudoku Puzzles with 95% accuracy",
      description: [
        "Completed complex grids within 4 minutes 45 seconds in Speed Puzzle Solving Competition."
      ],
      icon: Clock,
      type: "Competition",
      period: "",
      location: ""
    },
    {
      title: "Delivered innovative Technical Paper Presentation on Progressive Web Apps",
      description: [
        "Presented at Quest 2k21, analyzing emerging web technologies.",
        "Received highest audience engagement score of 92%."
      ],
      icon: FileText,
      type: "Presentation",
      period: "Quest 2k21",
      location: ""
    }
  ];

  return (
    <section id="activities" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights of my achievements and presentations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-8">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>

                    {/* Content */}
                    <div className="ml-20 w-full">
                      <Card className="p-6 hover-lift bg-white shadow-custom border-l-4 border-l-primary">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div className="flex-1 min-w-0 flex items-center space-x-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {activity.title}
                            </h3>
                          </div>
                          <Badge 
                            variant="secondary"
                            className="ml-4"
                          >
                            {activity.type}
                          </Badge>
                        </div>

                        {activity.period && (
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {activity.period}
                            </div>
                          </div>
                        )}

                        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                          {activity.description.map((item, i) => (
                            <li key={i} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
