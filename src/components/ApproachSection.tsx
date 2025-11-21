import { Link, Shield, TrendingUp } from "lucide-react";

const ApproachSection = () => {
  const benefits = [
    {
      icon: <Link className="w-10 h-10 text-primary" />,
      title: "Connect",
      description: "To the specific people and projects where you can win"
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Protect",
      description: "Your reputation with context-rich, relevant outreach"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Build",
      description: "A data-rich modern growth engine that compounds over time"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="mb-6">
            A <span className="text-primary">Smarter Way</span> to Grow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-2">
            We combine deep industry knowledge with AI-native systems to help you:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="mission-card text-center slide-up visible"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            We're a small, selective, AI-native partner serving mission-critical companies in the US and Europe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
