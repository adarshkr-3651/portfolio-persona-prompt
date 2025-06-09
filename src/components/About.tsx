
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", 
    "[Skill 5]", "[Skill 6]", "[Skill 7]", "[Skill 8]"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                [Your Professional Headline]
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [Detailed personal bio - Tell your story, your background, what drives you, and what makes you unique in your field. This should be 2-3 paragraphs that give readers a good sense of who you are.]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                [Continue your story here - perhaps mention your education, career journey, or personal interests that relate to your professional life.]
              </p>
            </div>

            {/* Education */}
            <Card className="border-red-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">[Degree Title]</p>
                    <p className="text-red-500">[Institution Name]</p>
                    <p className="text-sm text-muted-foreground">[Year of Graduation]</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">[Additional Degree/Certification]</p>
                    <p className="text-red-500">[Institution Name]</p>
                    <p className="text-sm text-muted-foreground">[Year]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Experience Highlights */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Experience Highlights</h4>
              <div className="space-y-4">
                <Card className="border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-foreground">[Job Title]</p>
                        <p className="text-red-500">[Company Name]</p>
                      </div>
                      <p className="text-sm text-muted-foreground">[Dates]</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      [Brief description of role and key achievements]
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-foreground">[Previous Job Title]</p>
                        <p className="text-red-500">[Previous Company]</p>
                      </div>
                      <p className="text-sm text-muted-foreground">[Dates]</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      [Brief description of role and key achievements]
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
