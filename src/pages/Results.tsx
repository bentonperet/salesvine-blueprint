import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Results = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Sales", 
      company: "DataCore Infrastructure",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Salesvine transformed our outbound from a numbers game to a precision instrument. We're now having conversations with decision-makers who actually need our solutions.",
      results: "300% increase in qualified meetings"
    },
    {
      name: "Michael Torres",
      title: "CEO",
      company: "Pachyderm Global", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The team at Salesvine doesn't just understand sales—they understand our industry. Their AEO strategy has us ranking first when prospects search for solutions like ours.",
      results: "450% increase in inbound leads"
    },
    {
      name: "Jennifer Walsh",
      title: "Head of Growth",
      company: "CriticalTech Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", 
      quote: "Finally, a partner that gets it. No more generic templates or spray-and-pray tactics. Every message respects our buyers' intelligence and our reputation.",
      results: "85% open rate on outbound campaigns"
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
              The Proof is in the <span className="text-primary">Pipeline</span>
            </h1>
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4">100+</div>
            <p className="text-2xl md:text-3xl mb-4">Warm leads delivered to our clients</p>
            <p className="text-xl text-muted-foreground">in the last 6 months</p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="section-padding bg-card/30">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Featured Success Story</h2>
                <p className="text-xl text-muted-foreground">Pachyderm Global - Data Center Infrastructure</p>
              </div>
              
              <div className="mission-card">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">450%</div>
                    <p className="text-muted-foreground">Increase in inbound leads</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12x</div>
                    <p className="text-muted-foreground">ROI in first 6 months</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$2.3M</div>
                    <p className="text-muted-foreground">Pipeline generated</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="mb-4">The Challenge</h3>
                  <p className="text-muted-foreground mb-6">
                    Pachyderm Global had superior data center infrastructure solutions but was struggling to break through 
                    to decision-makers at enterprise accounts. Their previous outbound efforts were generating low response 
                    rates and weren't reflecting the quality of their solutions.
                  </p>
                  
                  <h3 className="mb-4">Our Approach</h3>
                  <p className="text-muted-foreground mb-6">
                    We implemented our signal-based outbound methodology, created an AEO content strategy targeting 
                    infrastructure decision-makers, and built automated systems that respected their buyers' expertise 
                    while demonstrating Pachyderm's technical depth.
                  </p>
                  
                  <h3 className="mb-4">The Results</h3>
                  <p className="text-muted-foreground">
                    Within 90 days, Pachyderm was consistently booking 15-20 qualified meetings per month with 
                    enterprise decision-makers, and their AEO strategy had them ranking #1 for key industry searches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Wall */}
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground">Real results from real mission-critical companies</p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="mission-card slide-up visible"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <p className="text-lg leading-relaxed mb-4">"{testimonial.quote}"</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-muted-foreground">{testimonial.title}</div>
                          <div className="text-primary font-medium">{testimonial.company}</div>
                        </div>
                        <div className="mt-4 sm:mt-0 text-right">
                          <div className="text-xl font-bold text-primary">{testimonial.results}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-accent">
          <div className="container-width text-center text-primary-foreground">
            <h2 className="mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Your personalized 14-Point Snapshot shows you exactly how we'd build similar results for your business.
            </p>
            <Button className="cta-secondary bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground text-lg px-12 py-4">
              Get My Free Results Preview
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Results;