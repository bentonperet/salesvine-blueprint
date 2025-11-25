import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    website: "",
    challenge: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/50389150/df239203-4dad-4f55-861d-3366913c1861`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "full_name", value: formData.full_name },
              { name: "email", value: formData.email },
              { name: "company", value: formData.company },
              { name: "website", value: formData.website },
              { name: "challenge", value: formData.challenge },
            ],
            context: {
              pageUri: window.location.href,
              pageName: "Contact - Free Snapshot",
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          full_name: "",
          email: "",
          company: "",
          website: "",
          challenge: ""
        });
      } else {
        const errorData = await response.json();
        console.error("HubSpot form error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Button className="cta-primary w-full" asChild>
                  <a href="https://cal.com/bentonperet/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Your Call
                  </a>
                </Button>
              </div>

              {/* Option 2: Free Snapshot */}
              <div className="mission-card">
                <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="mb-4 text-center">Get Your Free Snapshot</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  Receive your personalized Outreach Snapshot within 48 hours - no sales pitch, just insights on sales position and customer targeting.
                </p>
                
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="text-primary text-5xl mb-4">✓</div>
                    <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
                    <p className="text-muted-foreground">
                      We'll send your personalized 14-Point Outreach Snapshot within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input
                        id="full_name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        type="text"
                        placeholder="yourcompany.com"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="challenge">Biggest Growth Challenge (Optional)</Label>
                      <Textarea
                        id="challenge"
                        placeholder="What's your biggest challenge in reaching new buyers?"
                        rows={3}
                        value={formData.challenge}
                        onChange={handleInputChange}
                      />
                    </div>
                    {submitStatus === "error" && (
                      <p className="text-red-500 text-sm">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                    <Button
                      type="submit"
                      className="cta-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Snapshot"}
                    </Button>
                  </form>
                )}
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