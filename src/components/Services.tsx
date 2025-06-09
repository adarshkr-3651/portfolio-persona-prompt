
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "[Service 1 Title]",
      description: "[Detailed description of this service, what it includes, and how it benefits clients.]",
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "[Service 2 Title]",
      description: "[Detailed description of this service, what it includes, and how it benefits clients.]",
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "[Service 3 Title]",
      description: "[Detailed description of this service, what it includes, and how it benefits clients.]",
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "[Service 4 Title]",
      description: "[Detailed description of this service, what it includes, and how it benefits clients.]",
      features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"]
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of professional services to help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-red-500/20 hover:border-red-500/40"
            >
              <CardHeader>
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-red-500 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
