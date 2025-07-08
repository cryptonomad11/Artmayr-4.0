import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OverviewSection from "@/components/overview-section";
import PhasesSection from "@/components/phases-section";
import RoiSection from "@/components/roi-section";
import TechnologySection from "@/components/technology-section";
import PricingSection from "@/components/pricing-section";
import TeamSection from "@/components/team-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <PhasesSection />
      <RoiSection />
      <TechnologySection />

      <PricingSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
