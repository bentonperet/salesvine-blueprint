import { Mail, Table2, Users, TrendingDown } from "lucide-react";

const ChallengeSection = () => {
  const challenges = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Random outreach that feels spammy"
    },
    {
      icon: <Table2 className="w-8 h-8 text-primary" />,
      title: "Scattered spreadsheets instead of systems"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Missing the right decision-makers"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: "No connection between project intelligence and conversations"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="mb-6">
            The Old Playbook <span className="text-primary">Doesn't Work Anymore</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mission-critical infrastructure runs on trust and relationships. But many smart teams are still using outdated sales tactics:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="mission-card flex items-center space-x-4 slide-up visible"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 border border-primary/20">
                {challenge.icon}
              </div>
              <p className="text-foreground font-medium">
                {challenge.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
