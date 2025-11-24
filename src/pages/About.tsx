import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Target, Brain, Compass } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Context Over Volume",
      description: "In a world of infinite noise, the only currency left is context. We use forensic research and proprietary databases to identify not just who to talk to, but when and why. We're surgical, not spam."
    },
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "AI-Native, Not AI-Wrapped", 
      description: "We didn't pivot to AI; we were born in it. We combine the rigorous process of major consultancies with startup speed. AI handles the heavy lifting so your team focuses on solving complex engineering problems."
    },
    {
      icon: <Compass className="w-10 h-10 text-primary" />,
      title: "Strategy First, Tactics Second",
      description: "We're not a traditional agency. We combine high-level corporate strategy (ex-Accenture heritage) with execution. Every campaign is built on intelligence, not guesswork."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding engineering-grid">
          <div className="container-width text-center">
            <h1 className="mb-3">
              Intelligent Growth for the <span className="text-primary">Mission Critical</span> Industry
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We help the critical infrastructure industry use tools as modern as the tech they are building. We're replacing brute-force sales with intelligent strategy so the best innovations can build our future faster.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p className="text-foreground font-semibold text-xl">
                  The Mission Critical industry runs on trust.
                </p>
                
                <p>
                  It is a tribe of builders creating the backbone of the modern world. But for too long, there has been a fundamental disconnect: we are an industry building bleeding-edge, futuristic technology, yet we are running our sales and growth strategies using tools from the past.
                </p>
                
                <p>
                  We saw brilliant companies with game-changing ideas, new cooling systems, efficient power solutions, revolutionary engineering services. They were trapped in spreadsheets, scrolling linkedin for leads and relying on brute-force outreach that added to the noise rather than creating value.
                </p>
                
                <p className="text-foreground font-semibold text-xl">
                  We founded Salesvine to help end the era of "brute force" sales.
                </p>
                
                <p>
                  We realized that in a world of infinite noise, the only currency left is <strong>context</strong>. We didn't just build a lead generation agency; we built an intelligence engine for the Data Center and critical infrastructure sectors. By combining strategy with a deep proprietary database of construction projects and provider relationships, we flipped the script.
                </p>
                
                <p>
                  We are AI-native. We use forensic research tools to identify not just <em>who</em> to talk to, but <em>when</em> and <em>why</em>. We automate the heavy lifting so your team can focus on building the relationship and closing the deal.
                </p>
                
                <p className="text-primary font-semibold text-xl">
                  We believe that accelerating the critical infrastructure supply chain isn't just good business, it's important for our future. The best ideas deserve to win. We're here to make sure they do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-card/30">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="mission-card">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Benton Peret, Founder"
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 flex-shrink-0"
                  />
                  <div>
                    <blockquote className="text-xl text-primary font-medium mb-4">
                      "I'm a builder at heart, and I've spent years in high-level strategy consulting. But standing in a crowded conference floor, I realized the people building our future were stuck using sales tools from the past. I saw massive potential being left on the table because of outdated processes and over-reliance on serendipity. I built Salesvine to bridge that gap—bringing the power of AI and forensic data to the industry I love, to help the 'nerds' and the innovators win."
                    </blockquote>
                    <div className="mt-6">
                      <div className="font-semibold text-lg">Benton Peret</div>
                      <div className="text-primary">Founder, Salesvine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-16 md:py-21 lg:py-26">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Principles</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The core beliefs that guide everything we do.
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
            <h2 className="mb-6">Ready to Level Up Your Sales Systems?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's talk about building a predictable growth system for your business.
            </p>
            <Button className="cta-secondary bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground text-lg px-12 py-4" asChild>
              <a href="/contact">Start the Conversation</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;