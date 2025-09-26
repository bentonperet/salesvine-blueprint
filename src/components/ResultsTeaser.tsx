import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResultsTeaser = () => {
  return (
    <section className="section-padding bg-gradient-accent relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 engineering-grid opacity-20" />
      
      <div className="container-width relative z-10">
        <div className="text-center text-primary-foreground">
          {/* Large Number Display */}
          <div className="mb-6">
            <div className="text-8xl md:text-9xl font-bold leading-none slide-up visible">
              100<span className="text-primary-glow">+</span>
            </div>
            <div className="text-2xl md:text-3xl font-light opacity-90 slide-up visible" style={{ animationDelay: '0.2s' }}>
              Warm leads delivered to our clients
            </div>
            <div className="text-lg md:text-xl opacity-75 slide-up visible" style={{ animationDelay: '0.3s' }}>
              in the last 6 months
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90 leading-relaxed slide-up visible" style={{ animationDelay: '0.4s' }}>
            Real results from real mission-critical companies who trusted us to build their intelligent growth systems.
          </p>

          {/* CTA */}
          <Button 
            variant="outline" 
            className="cta-secondary bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground slide-up visible"
            style={{ animationDelay: '0.5s' }}
          >
            See Our Results <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary-glow/30 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-glow/20 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default ResultsTeaser;