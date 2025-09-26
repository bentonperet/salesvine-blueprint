import { CheckCircle, Target, MessageSquare, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SnapshotExplainer = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision Targeting & ICP",
      description: "We'll define your ideal customer, identify key buying signals, and give you a scored list of target accounts."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Operator-Ready Messaging & Cadence",
      description: "You'll get ready-to-send outreach scripts for every channel that respect your buyers' time and expertise."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Future-Proof AEO & Content Plan",
      description: "We'll audit your AEO gaps and give you ready-to-publish content to ensure you're found by buyers using AI."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "A Full Execution & Measurement Playbook",
      description: "You get a 90-day pilot plan, a reporting dashboard template, and all the SOPs needed to execute flawlessly."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6">
            Your Complete Go-to-Market Playbook.{" "}
            <span className="text-primary">Delivered in 48 hours.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The 14-Point Snapshot is a comprehensive, actionable plan with a{" "}
            <span className="text-primary font-semibold">"no pitch promise."</span>{" "}
            Just pure strategy and execution guidance tailored specifically to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="mission-card flex items-start space-x-6 slide-up visible"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 border border-primary/20">
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>No sales pitch, just actionable insights</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-4">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Delivered within 48 hours</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Tailored specifically to mission-critical infrastructure</span>
          </div>
        </div>

        <div className="text-center">
          <Button className="cta-primary text-lg px-12 py-4">
            Get My Free Snapshot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SnapshotExplainer;