import { Server, HardHat, Wifi } from "lucide-react";

const WhoWeServeSection = () => {
  const audiences = [
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Data Center Equipment & Technology Vendors",
      description: "Connect product innovation to the right buyers and projects"
    },
    {
      icon: <HardHat className="w-10 h-10 text-primary" />,
      title: "Construction, Commissioning & Engineering Services",
      description: "Navigate complex buying committees and long sales cycles"
    },
    {
      icon: <Wifi className="w-10 h-10 text-primary" />,
      title: "Infrastructure Providers",
      description: "Surface opportunities that match your specialty"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="mb-6">
            Built for <span className="text-primary">Mission-Critical Teams</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="mission-card text-center slide-up visible"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  {audience.icon}
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
