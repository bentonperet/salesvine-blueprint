import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ChallengeSection />
        <ApproachSection />
        <ProcessSection />
        <WhoWeServeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
