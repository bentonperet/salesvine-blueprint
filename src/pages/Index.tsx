import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ValuePillars from "@/components/ValuePillars";
import SnapshotExplainer from "@/components/SnapshotExplainer";
import ResultsTeaser from "@/components/ResultsTeaser";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <ValuePillars />
        <SnapshotExplainer />
        <ResultsTeaser />
      </main>
    </div>
  );
};

export default Index;