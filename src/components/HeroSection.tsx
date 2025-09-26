import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section engineering-grid">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      {/* Animated Glow Effect */}
      <div className="hero-glow" />
      
      {/* Hero Content */}
      <div className="relative z-10 container-width text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="mb-6 slide-up visible">
            Intelligent Pipeline for{" "}
            <span className="text-primary">Mission-Critical</span>{" "}
            Innovators
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed slide-up visible" style={{ animationDelay: '0.2s' }}>
            We combine signal-based outbound, AI strategy, and Answer Engine Optimization (AEO) 
            to connect you with the exact buyers you need to talk to. 
            <span className="text-foreground font-semibold"> Predictable growth that respects your reputation.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up visible" style={{ animationDelay: '0.4s' }}>
            <Button className="cta-primary text-lg px-8 py-4">
              Get My 14-Point Outreach Snapshot
            </Button>
            <Button variant="outline" className="cta-secondary text-lg px-8 py-4">
              See Our Results
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <p className="text-sm text-muted-foreground mt-6 slide-up visible" style={{ animationDelay: '0.6s' }}>
            <span className="text-primary font-semibold">100+</span> warm leads delivered to our clients in the last 6 months
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;