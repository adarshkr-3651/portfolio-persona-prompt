
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js",
    "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "NestJS",
    "Django", "MongoDB", "Firebase", "PostgreSQL (basic)",
    "REST APIs", "Webhooks", "Git", "GitHub", "Vercel", "Netlify",
    "n8n", "Zapier", "CI/CD", "Python", "Machine Learning (basic)",
    "Appwrite", "Unity (2D/3D)", "C#", "Game Design Logic"
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
                Full-Stack Developer | Automation Developer | AI &amp; Systems Enthusiast
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm an IT enthusiast with a passion for learning and problem-solving. I enjoy working with technology and have a growing interest in areas like software development and the share market. Outside of tech, I'm an avid cricket player and a proud dog owner. I value teamwork, continuous growth, and balancing life with hobbies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                [Continue your story here – perhaps mention your education, career journey, or personal interests that relate to your professional life.]
              </p>
            </div>

            {/* Education */}
            <Card className="border-red-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Bachelor's of Computer Science</p>
                    <p className="text-red-500">Herald College Kathmandu</p>
                    <p className="text-sm text-muted-foreground">2024 – present | Kathmandu, Nepal</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">+2 Science</p>
                    <p className="text-red-500">KMC Bagbazar</p>
                    <p className="text-sm text-muted-foreground">2020 – 2022 | Kathmandu, Nepal</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">SEE</p>
                    <p className="text-red-500">B.K.V.M.</p>
                    <p className="text-sm text-muted-foreground">2017 – 2020 | Biratnagar, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-red-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Achievements</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <span className="font-semibold">Academic Scholarship Recipient</span> – Awarded for outstanding performance in entrance and +2 Science program (Among 10%)
                  </li>
                  <li>
                    <span className="font-semibold">Top 10 Rank Holder – SEE Examination, B.K.V.M.</span> (out of 300+ students)
                  </li>
                  <li>
                    Secured first place in a prestigious school level debate competition, showcasing strong communication and persuasive skills.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Skills &amp; Expertise</h3>
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
                        <p className="font-medium text-foreground">Community Member</p>
                        <p className="text-red-500">BizCore</p>
                      </div>
                      <p className="text-sm text-muted-foreground">2025 – present | Nepal</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      [Describe your role and key achievements here]
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-foreground">Member</p>
                        <p className="text-red-500">Nobel English Speaking Club</p>
                      </div>
                      <p className="text-sm text-muted-foreground">2024 – present | USA</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      [Describe your role and key achievements here]
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
