import { Target, Brain, Search } from "lucide-react";

const ValuePillars = () => {
  const pillars = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Signal-Based Outbound",
      description: "Connect with buyers at the exact moment they have a need. No more spray-and-pray tactics that damage your reputation."
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI Strategy & Systems", 
      description: "Automate the grunt work so you can focus on high-value conversations. Intelligence amplifies your expertise, never replaces it."
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Answer Engine Optimization (AEO)",
      description: "Become the definitive answer your future customers are searching for. Position your expertise where AI systems find it first."
    }
  ];

  return (
    <section className="section-padding bg-card/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            A Modern Growth Engine for <span className="text-primary">Mission-Critical Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated approach solves the entire growth challenge—from strategy and outreach 
            to ensuring you're found by the next wave of buyers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="mission-card text-center slide-up visible"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="mb-4 text-primary">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;