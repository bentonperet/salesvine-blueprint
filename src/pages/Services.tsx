import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Brain, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Intelligent Outbound",
      subtitle: "Connect with decision-makers at the exact moment they have a need",
      description: "Stop hoping your message gets noticed. Our signal-based approach identifies buying intent and creates conversations that matter.",
      href: "/services/outbound"
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI Strategy & Systems",
      subtitle: "Automate the grunt work, amplify your expertise",
      description: "Build intelligent systems that work 24/7 while you focus on high-value conversations and strategic decisions.",
      href: "/services/ai-strategy"
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Answer Engine Optimization (AEO)",
      subtitle: "Be the answer your buyers find when they ask AI",
      description: "Position your expertise where the next generation of search happens—in AI systems and answer engines.",
      href: "/services/aeo"
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
              A Modern Growth Engine for{" "}
              <span className="text-primary">Mission-Critical Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our services are an integrated system designed to solve the entire growth challenge—from 
              strategy and outreach to ensuring you're found by the next wave of buyers.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-width">
            <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="mission-card slide-up visible"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0 p-4 rounded-full bg-primary/10 border border-primary/20">
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="mb-2 text-primary">{service.title}</h3>
                      <p className="text-lg font-medium mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button className="cta-secondary">
                        Learn More <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card/30">
          <div className="container-width text-center">
            <h2 className="mb-6">Ready to Build Your Intelligent Growth System?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's start with your personalized 14-Point Outreach Snapshot—completely free, no strings attached.
            </p>
            <Button className="cta-primary text-lg px-12 py-4">
              Get My Free Snapshot
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;