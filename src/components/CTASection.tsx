import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-accent relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 engineering-grid opacity-20" />
      
      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-primary-foreground slide-up visible">
            Ready to Build Your Next Chapter?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed slide-up visible" style={{ animationDelay: '0.2s' }}>
            Let's talk about how AI-powered, reputation-safe outreach can help you reach the right people and projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up visible" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="cta-primary bg-background text-primary hover:bg-background/90 text-lg px-8 py-4"
              asChild
            >
              <a href="/contact">Schedule a Call</a>
            </Button>
            <Button 
              variant="outline" 
              className="cta-secondary bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-4"
              asChild
            >
              <a href="/about">Learn More About Our Approach</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary-glow/30 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-glow/20 rounded-full animate-pulse" />
    </section>
  );
};

export default CTASection;
