import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-width text-center">
            <h1 className="mb-6">Let's Build Your Pipeline</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to connect with the exact buyers you need? Let's start the conversation.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="pb-20">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Option 1: Discovery Call */}
              <div className="mission-card text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="mb-4">Book a Discovery Call</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Schedule a 30-minute conversation to discuss your growth challenges and see if we're a good fit.
                </p>
                <Button className="cta-primary w-full">
                  Schedule Discovery Call
                </Button>
              </div>

              {/* Option 2: Free Snapshot */}
              <div className="mission-card">
                <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="mb-4 text-center">Get Your Free Snapshot</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  Receive your personalized 14-Point Outreach Snapshot within 48 hours—no sales pitch, just strategy.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="Your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" type="text" placeholder="Your company name" required />
                  </div>
                  <div>
                    <Label htmlFor="website">Company Website</Label>
                    <Input id="website" type="url" placeholder="https://yourcompany.com" />
                  </div>
                  <div>
                    <Label htmlFor="challenge">Biggest Growth Challenge (Optional)</Label>
                    <Textarea 
                      id="challenge" 
                      placeholder="What's your biggest challenge in reaching new buyers?"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="cta-primary w-full">
                    Get My Free Snapshot
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Serving mission-critical companies nationwide</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Typically respond within 2-4 business hours
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;