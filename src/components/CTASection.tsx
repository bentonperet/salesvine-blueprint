import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-navy relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 engineering-grid opacity-10" />
      
      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-white slide-up visible">
            Ready to Build Your Next Chapter?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed slide-up visible" style={{ animationDelay: '0.2s' }}>
            Let's talk about how AI-powered, reputation-safe outreach can help you reach the right people and projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up visible" style={{ animationDelay: '0.4s' }}>
            <Button
              className="cta-primary text-lg px-10 py-6"
              asChild
            >
              <Link to="/contact">Schedule a Call</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white text-lg px-10 py-6 rounded-full"
              asChild
            >
              <Link to="/about">Learn More About Our Approach</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-full animate-pulse" />
    </section>
  );
};

export default CTASection;
