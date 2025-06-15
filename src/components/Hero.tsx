
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-red-500 font-medium">Hello, I'm</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Adarsh Kumar Mandal
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Full-Stack Developer | Automation Developer | AI &amp; Systems Enthusiast
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              I'm an IT enthusiast passionate about learning and problem-solving, with a growing interest in software development, automation, and technology. I enjoy working with teams and value continuous growth and balance in my life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                <a href="[CV_DOWNLOAD_LINK]" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>

            {/* Contact & Socials */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground pt-2">
              <span>adarshrk3651@gmail.com</span>
              <span className="hidden md:inline">|</span>
              <span>+9779827349751</span>
              <span className="hidden md:inline">|</span>
              <span>Kist Hospital, Imadol, Lalitpur, Nepal</span>
              <span className="flex gap-2 items-center ml-0 md:ml-2">
                <a href="https://linkedin.com/in/adarsh-kumar-mandal-ba3784367" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 hover:text-red-500" />
                </a>
                <a href="[YOUR_GITHUB_URL]" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 hover:text-red-500" />
                </a>
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground font-bold text-5xl">
                  {/* [Your Profile Image Here] */}
                  [Profile Image]
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-red-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
