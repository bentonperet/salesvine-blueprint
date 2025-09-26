const IntroSection = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 slide-up visible">
            In Our Industry, <span className="text-primary">Trust is Everything</span>
          </h2>
          
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6 slide-up visible" style={{ animationDelay: '0.2s' }}>
            <p>
              The mission-critical industry runs on relationships. Trust is the currency, and a good reputation 
              is your greatest asset. But in a world of automated outreach and generic sales pitches, 
              it's easy to become part of the noise.
            </p>
            
            <p className="text-foreground font-medium">
              We founded Salesvine to change that.
            </p>
            
            <p>
              We combine a deep, insider's understanding of the mission-critical landscape with the power 
              of intelligent automation and AI. Our approach isn't about sending more emails; 
              it's about starting the right conversations.
            </p>
            
            <p className="text-primary font-semibold text-xl">
              We build growth systems that work <em>for</em> your reputation, not against it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;