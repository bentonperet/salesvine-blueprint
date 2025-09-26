import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, Settings, Play, TrendingUp } from "lucide-react";

const Playbook = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Discover",
      description: "We start with a deep dive into your ICP, buying signals, and competitive landscape to build the strategic foundation."
    },
    {
      number: "02", 
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Build",
      description: "We construct your entire growth engine: lists, messaging, automations, and AEO content atoms."
    },
    {
      number: "03",
      icon: <Play className="w-12 h-12 text-primary" />,
      title: "Run", 
      description: "We execute the multi-channel outbound campaigns, constantly testing and optimizing for performance and deliverability."
    },
    {
      number: "04",
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Prove",
      description: "We deliver results you can see: booked meetings, a clear reporting dashboard, and measurable pipeline value."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding engineering-grid">
          <div className="container-width text-center">
            <h1 className="mb-6">
              Our 4-Step Playbook for{" "}
              <span className="text-primary">Predictable Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven methodology that transforms mission-critical companies from hoping for leads 
              to predictably generating qualified pipeline.
            </p>
          </div>
        </section>

        {/* Steps Timeline */}
        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row items-start mb-16 last:mb-0 slide-up visible"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 md:mr-12 mb-6 md:mb-0">
                    <div className="relative">
                      <div className="mission-card text-center w-32 h-32 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-primary mb-2">{step.number}</div>
                        {step.icon}
                      </div>
                      {/* Connection Line */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-32 left-1/2 w-0.5 h-16 bg-border transform -translate-x-0.5" />
                      )}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-grow">
                    <h3 className="mb-4 text-2xl">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Benefits */}
        <section className="section-padding bg-card/30">
          <div className="container-width text-center">
            <h2 className="mb-8">Why This Process Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="slide-up visible" style={{ animationDelay: '0.1s' }}>
                <h3 className="mb-4 text-primary">Signal-First, Not Spray-and-Pray</h3>
                <p className="text-muted-foreground">
                  We target based on buying signals, not guesswork, ensuring every outreach is relevant and timely.
                </p>
              </div>
              <div className="slide-up visible" style={{ animationDelay: '0.2s' }}>
                <h3 className="mb-4 text-primary">Automate the Boring; Humanize the Important</h3>
                <p className="text-muted-foreground">
                  AI handles the grunt work while human expertise crafts the strategy and high-value interactions.
                </p>
              </div>
              <div className="slide-up visible" style={{ animationDelay: '0.3s' }}>
                <h3 className="mb-4 text-primary">Evidence Over Opinions</h3>
                <p className="text-muted-foreground">
                  Every decision is backed by data, and every result is measurable and reportable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-width text-center">
            <h2 className="mb-6">Ready to See This Process in Action?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your free 14-Point Snapshot shows you exactly how this playbook would work for your specific business.
            </p>
            <Button className="cta-primary text-lg px-12 py-4">
              Get My Personalized Playbook
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Playbook;