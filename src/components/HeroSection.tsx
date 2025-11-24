import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section engineering-grid">      
      {/* Data Center Background */}
      <div 
        className="absolute inset-0 opacity-60" 
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      
      {/* Animated Glow Effect */}
      <div className="hero-glow" />
      
      {/* Hero Content */}
      <div className="relative z-10 container-width text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="mb-6 slide-up visible text-foreground">
            Intelligent Sales for{" "}
            <span className="text-primary">Mission-Critical</span>{" "}
            Companies
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed slide-up visible max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            We help data center, construction, and infrastructure companies grow with AI-powered systems and reputation-safe outreach.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center slide-up visible" style={{ animationDelay: '0.4s' }}>
            <Button className="cta-primary text-lg px-10 py-6" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Removed, cleaner without it */}
    </section>
  );
};

export default HeroSection;
