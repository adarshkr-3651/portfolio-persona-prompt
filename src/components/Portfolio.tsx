
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "[Project Title 1]",
      description: "[Brief description of the project, technologies used, and your role in it.]",
      image: "placeholder",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 2]",
      description: "[Brief description of the project, technologies used, and your role in it.]",
      image: "placeholder",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 3]",
      description: "[Brief description of the project, technologies used, and your role in it.]",
      image: "placeholder",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "[Project Title 4]",
      description: "[Brief description of the project, technologies used, and your role in it.]",
      image: "placeholder",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Portfolio
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-red-500/20 hover:border-red-500/40">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-r from-red-500/20 to-red-600/20 flex items-center justify-center text-muted-foreground">
                  [Project Image Placeholder]
                </div>
                
                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
