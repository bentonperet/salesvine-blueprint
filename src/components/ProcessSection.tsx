import { Lightbulb, Search, Users, Calendar, Send, RefreshCw } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Strategy",
      description: "Define value proposition, ICP, channels, and differentiation"
    },
    {
      number: 2,
      icon: <Search className="w-6 h-6" />,
      title: "Research",
      description: "Gather signals, build industry context, and assess sales readiness"
    },
    {
      number: 3,
      icon: <Users className="w-6 h-6" />,
      title: "Contacts",
      description: "Identify and prioritize people at target companies based on ICP"
    },
    {
      number: 4,
      icon: <Calendar className="w-6 h-6" />,
      title: "Plan",
      description: "Orchestrate companies, contacts, copy, and create 3-5 focused campaigns"
    },
    {
      number: 5,
      icon: <Send className="w-6 h-6" />,
      title: "Outreach",
      description: "Execute across LinkedIn, email, WhatsApp with systematic testing"
    },
    {
      number: 6,
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Iterate",
      description: "Learn from feedback and refine targeting, copy, and results"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            How We Work: <span className="text-primary">6 Steps to Predictable Growth</span>
          </h2>
        </div>
        
        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary/20" style={{ marginLeft: '5%', marginRight: '5%' }} />
            
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative slide-up visible"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Circle */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold relative z-10 border-4 border-background">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="mission-card flex items-start space-x-4 slide-up visible"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
