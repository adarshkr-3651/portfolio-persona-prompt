
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

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
                [Your Full Name]
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                [Your Professional Title]
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              [Brief introduction about yourself and what you do. This should be a compelling summary that captures your essence and expertise.]
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground">
                  [Profile Image Placeholder]
                </div>
              </div>
              {/* Decorative elements */}
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
