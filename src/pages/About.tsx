import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Target, Brain, BarChart3 } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Signal-First, Not Spray-and-Pray",
      description: "We target based on buying signals and intent data, not volume metrics that damage reputations."
    },
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "Automate the Boring; Humanize the Important", 
      description: "AI and automation handle research and repetitive tasks while human expertise drives strategy and relationships."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: "Evidence Over Opinions",
      description: "Every recommendation is backed by data, every campaign is measured, and every result is transparent."
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
              We're <span className="text-primary">Builders</span>, Helping Builders Grow
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded by builders who understand the mission-critical infrastructure industry from the inside out.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  The mission-critical infrastructure industry is the backbone of our digital world. From data centers 
                  that power the cloud to power systems that keep hospitals running, this industry builds the foundation 
                  that everything else depends on.
                </p>
                
                <p>
                  But here's the challenge: the best solutions don't always win. Often, it's the companies with the 
                  biggest sales teams or the loudest marketing that capture market share, not the ones with the most 
                  innovative technology or superior engineering.
                </p>
                
                <p className="text-foreground font-medium text-xl">
                  We founded Salesvine to change that dynamic.
                </p>
                
                <p>
                  We believe the companies with the best ideas—the ones solving the hardest problems with the most 
                  elegant solutions—deserve to win. They deserve to reach the buyers who need their innovations. 
                  They deserve growth systems that work as precisely as the infrastructure they build.
                </p>
                
                <p>
                  Our approach combines deep industry expertise with cutting-edge AI and automation. We don't just 
                  understand sales and marketing; we understand your buyers, your challenges, and the technical 
                  complexity of what you're selling.
                </p>
                
                <p>
                  The result? Growth systems that respect your reputation, conversations that demonstrate your expertise, 
                  and pipeline that reflects the true value of your solutions.
                </p>
                
                <p className="text-primary font-semibold text-xl">
                  Because when the best ideas win, we all benefit from better infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding bg-card/30">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="mission-card">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Founder"
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 flex-shrink-0"
                  />
                  <div>
                    <blockquote className="text-xl text-primary font-medium mb-4">
                      "As a builder at heart, my motivation has always been to be part of creating the monumental 
                      infrastructure that defines our future."
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      I founded Salesvine on a simple principle: technology should enhance trust, not erode it. 
                      After years of watching brilliant engineering companies struggle to connect with the buyers 
                      who desperately needed their solutions, I knew there had to be a better way.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The "nerds are here," and we're dedicated to making things better—not just for our clients, 
                      but for the entire industry that depends on mission-critical infrastructure.
                    </p>
                    <div className="mt-4">
                      <div className="font-semibold">Alex Rodriguez</div>
                      <div className="text-primary">Founder & CEO, Salesvine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Principles</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The core beliefs that guide everything we do for our mission-critical clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="mission-card text-center slide-up visible"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-primary">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-accent">
          <div className="container-width text-center text-primary-foreground">
            <h2 className="mb-6">Ready to Work with Builders Who Get It?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's start with a conversation about your growth challenges and how we can help solve them.
            </p>
            <Button className="cta-secondary bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground text-lg px-12 py-4">
              Schedule a Discovery Call
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;